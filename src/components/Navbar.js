import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

/**
 * Renders the Navbar using the supplied props.
 * @param {Any} props The properties passed in by the parent class
 */
export default function Navbar(props) {
    
    //Hides the help menu button while the help menu is open.
    const HIDE_BUTTON = () => document.getElementsByClassName("modal-button")[0].style.display = "none";

    return (
        <nav className={`navbar fixed-top navbar-expand ${props.active === "landing" ? window.innerWidth <= 576 ? "navbar-custom navbar-light bg-light" : "navbar-custom" : "navbar-light bg-light"}`}>
            { /* The logo and main title of the Navbar */ }
            <Link className = "navbar-brand" to={props.links[0]}>
                <img src={props.image} width="30" height="30" className="d-inline-block align-top" alt="" />
                FBLA Quiz
            </Link>
            { /* The Navbar toggler when the screen size is mobile to see the Navbar */ }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            { /* The Navbar elements that link to the specified pages */ }
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item nav-item-navbar${props.active === "landing" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[0]}>Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={`nav-item nav-item-navbar${props.active === "quiz" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[1]}>Quiz</Link>
                    </li>
                    <li className={`nav-item nav-item-navbar${props.active === "qa" ? " active-tab" : ""}`}>
                        <Link className="nav-link" to={props.links[2]}>Q&amp;A</Link>
                    </li>
                </ul>
                <ul className = "navbar-nav ml-auto">
                    <li className="nav-item nav-item-help">
                        { /* The help menu button that when clicked the funtion HIDE_BUTTON is called */ }
                        <button type="button" className="modal-button" data-toggle="modal" data-target="#helpModal" >
                            <img onClick = {HIDE_BUTTON} className = "nav-link" src = {props.color === "dark" ? require("../assets/images/helpDark.svg") : require("../assets/images/helpWhite.svg")} alt = "question mark icon" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}