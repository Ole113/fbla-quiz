import React from "react";
import "../assets/css/Quiz.css";

import Questions from "./questions/Questions.js";

export default function QuizForm(props) {
    let handleChange = (event) => {
        console.log("Change")
    }

    let handleSubmit = (event) => {
        //Makes it so the page won't refresh after clicking the submit button.
        event.preventDefault();
    }

    return (
        <div className="card quiz-form-container">
            <form onSubmit={handleSubmit}>
                <Questions apiURL = {props.apiURL} type={props.type} number={props.number} onChange={handleChange}/>
                <input type="submit" className="submit-quiz" value = "Submit" />
            </form>
        </div>
    );
}