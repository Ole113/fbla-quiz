import React from "react";

/**
 * 
 * @param {*} props 
 */
export default function TF(props) {
    return (
        <div className="form-group">
        <label htmlFor="numberQuestions">{props.getQuestionInfo.content}</label>
        <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here TF" />
        </div>
    );
}