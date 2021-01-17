import React from "react";
import QuizForm from "../components/QuizForm.js";
import "../assets/css/Quiz.css";
import QuizOptions from "../components/QuizOptions.js";
import Results from "./Results.js";

/**
 * The Quiz component that renders the quiz form and quiz options on the quiz page.
 */
export default class Quiz extends React.Component {
    /**
     * Sets the default state of the quiz.
     * @param {Any} props The properties passed in by the parent class
     */
    constructor(props) {
        super(props);
        this.state = {
            type: "Random",
            number: "5",
            answers: "",
            timer: ""
        };
        this.answersHolder = "";
    }

    /**
     * Callback that is passed into quiz options that gets the information that the user has input for the quiz options.
     * @param {Object} data The data to be updated in state.
     */
    handleOption = (data) => this.setState({ type: data.type, number: data.number });

    /**
     * Handles the user's answers that are passed from Questions.js to QuizForm.js to Quiz.js
     * The state answers need to be checked beforehand because if not an error will be thrown:
     * Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
     * @param {Object} answers The answers the user submitted along with the right answer and the question itself.
     */
    handleUserAnswers = (answers, timer, startTime) => {
        if (!this.state.answers) {
            this.setState({ answers: answers, timer: timer, startTime: startTime }, () => {
                this.answersHolder = this.state.answers;
                this.setState({ answers: "" });
            });
        }
    }

    /**
     * If the user has submitted the quiz then this makes it so if the user clicks on a link to the Quiz page again it shows the quiz form and not the results page.
     * The question type and number was defaulted to the last quiz submit so this makes them the default value.
     */
    handleResultsLoaded = () => {
        this.setState({ type: "Random",number: "5" }, () => {
            this.answersHolder = "";
        });
    }

    /**
     * Renders the quiz options and the quiz unless the QuizForm submit button has been clicked. If so the Results page is rendered.
     */
    render() {
        //Checks if the answersHolder variable is blank because if it is then the quiz hasn't been submitted yet.
        if (this.answersHolder) {
            return <Results resultsLoaded={this.handleResultsLoaded} startTime={this.state.startTime} submitTime={new Date().toLocaleTimeString()} answers={this.answersHolder} numberQuestions={this.state.number} />
        }  
        return (
            <div className="container">
                <div className="row quizRow">
                    <div className="col-2">
                        <QuizOptions onChangeOption={this.handleOption} />
                    </div>
                    <div className="col-10 col-10-quiz">
                        <QuizForm apiURL={this.props.apiURL} type={this.state.type} number={this.state.number} sendUserAnswers={this.handleUserAnswers} />
                    </div>
                </div>
            </div>
        );
    }
}