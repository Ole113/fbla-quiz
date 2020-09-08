import React from "react";

/**
 * The Blank question type.
 * @param {*} props The props passed in by the Questions.js file.
 */
export default function Blank(props) {
    return (
        <div className="form-group">
            <label htmlFor="numberQuestions">{props.content}</label>
            <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" required/>
        </div>
    );
}