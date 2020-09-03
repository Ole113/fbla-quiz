import React from "react";

/**
 * 
 * @param {*} props 
 */
export default function Blank(props) {
    return (
        <div className="form-group">
            <label htmlFor="numberQuestions">{props.content}</label>
            <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here BLANK" />
        </div>
    );
}