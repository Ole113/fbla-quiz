import React from "react";
import Point from "./Point.js";

/**
 * Three points combined together, contains the styling for the points(text-align: center).
 * The image for each point is a material icon that has had a gradient added in a SVG file.
 * @param {Object} props The properties passed in by the parent class
 */
export default function Points(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <Point content={props.contents[0]} icon={require("../assets/images/analytics.svg").default} />
            <Point content={props.contents[1]} icon={require("../assets/images/questions.svg").default} />
            <Point content={props.contents[2]} icon={require("../assets/images/forum.svg").default} />
        </div>
    );
}