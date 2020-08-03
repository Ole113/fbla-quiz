import React from "react";
import "../assets/css/Navbar.css";

export default function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="index.html">
                <img src={props.image} width="30" height="30" className="d-inline-block align-top" alt="" />
                FBLA Quiz
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="quiz.html">Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="practice.html">Practice</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="qa.html">Q&amp;A</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}