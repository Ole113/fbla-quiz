import React from "react";
import "../assets/css/Quiz.css";

import Questions from "./questions/Questions.js";

/**
 * Renders the entire quiz form.
 * @param {Object} props The props passed in by Quiz.js.
 */
export default class QuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitStatus: false,
            currentTime: "00:00:00",
            currentType: props.type,
            timer: ""
        };
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    /**
     * Checks if the form has been submitted.
     * @param {Object} event The form submission event.
     */
    handleSubmit = (event) => {
        //Makes it so the page won't refresh after clicking the submit button.
        event.preventDefault();
        //The form has been submitted and Questions.js needs to send the answers to QuizForm's parent.
        this.setState({ submitStatus: true });
    }

    /**
     * Send the users answers to Quiz.js.
     * @param {Object} answers The users answer, the question content, and the correct answer.
     */
    handleUserAnswers = (answers, startTime) => { this.props.sendUserAnswers(answers, this.state.currentTime, startTime); }

    /**
     * Updates the quiz time.
     */
    updateTime = () => {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
        }

        this.setState({ currentTime: (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds) })

        this.startTimer();
    }

    /**
     * Starts a timeout every second that calls updateTime.
     */
    startTimer = () => {
        this.setState({ timer: setTimeout(this.updateTime, 1000) });
    }

    /**
     * Starts the timer when the component has mounted.
     */
    componentDidMount() {
        this.startTimer();
    }

    /**
     * Fixes a bug that is created by setting state in componentDidUpdate.
     * Error was thrown after submit button was clicked "Can't perform a React state update on an unmounted component."
     * Solution was https://stackoverflow.com/a/61055910
     */
    componentWillUnmount() {
        this.setState = (state, callback) => { return; };
    }

    /**
     * Checks if the component has updated.
     * This means that when the question type is changed the timer is reset.
     */
    componentDidUpdate() {
        if (this.state.currentType !== this.props.type) {
            this.setState({ currentType: this.props.type })

            //Sets the variables and state time to 0.
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
            this.setState({ currentTime: "00:00:00" })

            //Clears the old timeout and makes a new one so there's not 2 at the same time.
            clearTimeout(this.state.timer);
            this.setState({ timer: setTimeout(this.updateTime, 1000) })
        }

    }

    /**
     * Renders the form that includes the timer, the questions, and the submit button.
     */
    render() {
        return (
            <div className="card card-shadow card-class quiz-form-container">
                <div className="timer">
                    <h2 id="timerValue">{this.state.currentTime}</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Questions apiURL={this.props.apiURL} type={this.props.type} number={this.props.number} submitStatus={this.state.submitStatus} sendUserAnswers={this.handleUserAnswers} />
                    <input type="submit" className="submit-quiz" value="Submit" />
                </form>
            </div>
        );
    }
}