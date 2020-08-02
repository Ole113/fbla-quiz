import React from "react";
import "../assets/css/Parallax.css";

/**
 * 
 * @param {Object} props 
 */
export default function Parallax(props) {

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={props.image} alt="main parallax" />
            </div>
        </div>
    );
}