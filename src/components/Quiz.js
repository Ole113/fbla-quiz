import React from "react";
import QuizForm from "../components/QuizForm.js";
import "../assets/css/Quiz.css";
import QuizOptions from "../components/QuizOptions.js";

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
        this.state = { type: "Random", number: "5" };
    }

    handleOption = (data) => this.setState({ type: data.type, number: data.number });

    render() {
        return (
            <div className="container">
                <div className="row quizRow">
                    <div className="col-2">
                        <QuizOptions onChangeOption={this.handleOption} />
                    </div>
                    <div className="col-10-quiz">
                        <QuizForm apiURL = {this.props.apiURL} type={this.state.type} number={this.state.number} />
                    </div>
                </div>
            </div>
        );
    }
}