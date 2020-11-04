import React from "react";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function QASection(props) {
    return (
        <div className="element-text" id={props.id}>
            <br /><br /><br />
            <div className="title">
                <h1 style={{ textTransform: "none" }}>{props.title}</h1>
                <img className = "navigate-icon" src = {require("../assets/images/navigateNext.svg")} alt = ""/>
            </div>
            {props.body}
        </div>
    );
}