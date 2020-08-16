import React from "react";
import QuizForm from "../components/QuizForm.js";
import "../assets/css/Quiz.css";

export default function QuizOptions() {
    return (
        <div className="quiz-options">
            <form>
                <label for="questionsType">Type of Questions</label>
                <select class="form-control" id = "questionsType">
                    <option>Random</option>
                    <option>Multiple choice</option>
                    <option>Fill in the blank</option>
                    <option>True/False</option>
                    <option>Matching</option>
                </select>
                <br />
                <div class="form-group">
                    <label for="numberQuestions">Number of Questions</label>
                    <input type="number" class="form-control" id="numberQuestions" aria-describedby="numberQuestions" placeholder="5" />
                </div>

            </form>
        </div>
    );
}