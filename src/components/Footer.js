import React from "react";
import "../assets/css/Footer.css";

/**
 * 
 */
export default function Footer(props) {
    return (
        <footer className="page-footer">
            <div className = "row">
            <div className="col logo-image">
                    <img src={props.image} alt="" />
                    <h1>FBLA Quiz</h1>
                </div>
            </div>
            <div className="row">

                <div className="col links">
                    <a href = "index.html">Home</a>
                    <a href = "quiz.html">Quiz</a>
                    <a href = "practice.html">Practice</a>
                    <a href = "qa.html">Q&amp;A</a>
                </div>

            </div>
            <div className="footer-copyright">
                &copy;2020 FBLA Quiz
                {/*darker section with just the copyright on the left side*/}
            </div>
        </footer>
    );
}
