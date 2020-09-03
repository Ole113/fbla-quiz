import React from "react";
import "../assets/css/Quiz.css";

import Questions from "./questions/Questions.js";

export default function QuizForm(props) {
    return (
        <div className="card quiz-form-container">
            <form>
                <Questions type={props.type} number={props.number} />
                <button type="submit" className="submit-quiz">Submit</button>
            </form>
        </div>
    );

}