import React from "react";
import "../assets/css/Point.css";

export default function Point(props) {
    return (
        <div className="point">
            <img src = {props.icon} className="icon" alt = "icon" />
            <h5>{props.content}</h5>
        </div>
    );
}