import React from "react";
import "../assets/css/Parallax.css";
import M from "materialize-css";

/**
 * 
 * @param {Object} props 
 */
export default function Parallax(props) {

    document.addEventListener("DOMContentLoaded", function () {
        let elems = document.querySelectorAll(".parallax");
        let instances = M.Parallax.init(elems);
    });

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={props.image} alt="main parallax" />
            </div>
        </div>
    );
}