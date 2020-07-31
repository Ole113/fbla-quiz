import React from "react";
import "../assets/css/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="index.html" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Quiz</a></li>
                    <li><a href="badges.html">Q&amp;A</a></li>
                    <li><a href="collapsible.html">Practice</a></li>
                </ul>
            </div>
        </nav>
    );
}