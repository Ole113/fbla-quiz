import React from "react";

/**
 * Renders the question and answers page with all its corresponding elements.
 * @param {Object} props The props from the parent.
 */
export default function QASection(props) {
    return (
        <div className="element-text" id={props.id}>
            <br /><br /><br />
            <div className="title">
                <h1 style={{ textTransform: "none" }}>{props.title}</h1>
                <img className = "navigate-icon" src = {require("../assets/images/navigateNext.svg").default} alt = ""/>
            </div>
            {props.body}
        </div>
    );
}