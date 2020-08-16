import React from "react";
import "../assets/css/Points.css";
import Point from "./Point.js";

export default function Points(props) {
    return (
        <div className="points">
            <Point content = {props.contents[0]} icon = {require("../assets/images/analytics.svg")} />
            <Point content = {props.contents[1]} icon = {require("../assets/images/questions.svg")} />
            <Point content = {props.contents[2]} icon = {require("../assets/images/forum.svg")} />
        </div>
    );
}