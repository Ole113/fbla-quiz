import React from "react";
import QuizForm from "../components/QuizForm.js";
import "../assets/css/Quiz.css";
import QuizOptions from "../components/QuizOptions.js";

export default function Quiz() {
    return (
        <div className = "container">
            <div className = "row quizRow">
                <div className = "col-2">
                    <QuizOptions />
                </div>
                <div className = "col-10">
                    <QuizForm />
                </div>
            </div>
        </div>
    );
}