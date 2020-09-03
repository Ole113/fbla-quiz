import React from "react";
import "../assets/css/Point.css";

/**
 * A singular point that has a image and a header below it.
 * Each point contains the majority of its own styling.
 * @param {Any} props The properties passed in by the parent class
 */
export default function Point(props) {
    return (
        <div className="point">
            <img src = {props.icon} className="icon" alt = "icon" />
            <h5>{props.content}</h5>
        </div>
    );
}