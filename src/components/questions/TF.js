import React from "react";

/**
 * The True/False question type.
 * @param {*} props The props passed in by the Questions.js file.
 */
export default function TF(props) {
    return (
        <div className="form-group">
        <label htmlFor="numberQuestions">{props.content}</label>
        <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" required/>
        </div>
    );
}