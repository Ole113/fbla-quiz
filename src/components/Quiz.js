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
            answers: ""
        };
    }

    /**
     * Callback that is passed into quiz options that gets the information that the user has input for the quiz options.
     * @param {Object} data The data to be updated in state.
     */
    handleOption = (data) => this.setState({ type: data.type, number: data.number });

    /**
     * Handles the user's answers that are passed from Questions.js to QuizForm.js to Quiz.js
     * @param {Object} answers The answers the user submitted along with the right answer and the question itself.
     */
    handleUserAnswers = (answers) => {
        if (!this.state.answers) this.setState({ answers: answers });
    }

    /**
     * Renders the quiz options and the quiz unless the QuizForm submit button has been clicked. If so the Results page is rendered.
     */
    render() {
        if (this.state.answers) {
            return <Results answers={this.state.answers} />
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