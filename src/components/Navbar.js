import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

/**
 * Renders the Navbar using the supplied props.
 * @param {Any} props The properties passed in by the parent class
 */
export default function Navbar(props) {
    return (
        <nav className={`navbar fixed-top navbar-expand-sm ${props.active === "landing" ? window.innerWidth <= 576 ? "navbar-custom navbar-light bg-light" : "navbar-custom" : "navbar-light bg-light"}`}>
            { /* The logo and main title of the Navbar */ }
            <a className="navbar-brand" href={props.links[0]}>
                <img src={props.image} width="30" height="30" className="d-inline-block align-top" alt="" />
                FBLA Quiz
            </a>
            { /* The Navbar toggler when the screen size is mobile to see the Navbar */ }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            { /* The Navbar elements that link to the specified pages */ }
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={`nav-item${props.active === "landing" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[0]}>Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={`nav-item${props.active === "quiz" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[1]}>Quiz</Link>
                    </li>
                    <li className={`nav-item${props.active === "practice" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[2]}>Practice</Link>
                    </li>
                    <li className={`nav-item${props.active === "qa" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[3]}>Q&amp;A</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
