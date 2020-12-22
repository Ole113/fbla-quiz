import React, { useState } from "react";
import "../assets/css/Quiz.css";

import Questions from "./questions/Questions.js";

/**
 * Renders the entire quiz form.
 * @param {Object} props The props passed in by Quiz.js.
 */
export default function QuizForm(props) {

    //Makes a state variable that is accessed with submitStatus and is set with the function updateSubmitStatus(newStatus).
    const [submitStatus, updateSubmitStatus] = useState(false);

    /**
     * Checks if the form has been submitted.
     * @param {Object} event The form submission event.
     */
    const handleSubmit = (event) => {
        //Makes it so the page won't refresh after clicking the submit button.
        event.preventDefault();
        //The form has been submitted and Questions.js needs to send the answers to QuizForm's parent.
        updateSubmitStatus(true);
    }

    /**
     * Send the users answers to Quiz.js.
     * @param {Object} answers The users answer, the question content, and the correct answer.
     */
    const handleUserAnswers = (answers) => props.sendUserAnswers(answers);

    return (
        <div className="card quiz-form-container">
            <form onSubmit={handleSubmit}>
                <Questions apiURL={props.apiURL} type={props.type} number={props.number} submitStatus={submitStatus} sendUserAnswers={handleUserAnswers} />
                <input type="submit" className="submit-quiz" value="Submit" />
            </form>
        </div>
    );
}