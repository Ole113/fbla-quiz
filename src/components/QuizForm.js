import React from "react";
import "../assets/css/Quiz.css";

import Questions from "./questions/Questions.js";

export default class QuizForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card quiz-form-container">
                <form>
                    <Questions type = {this.props.type} number = {this.props.number} />
                </form>
            </div>
        );
    }

}