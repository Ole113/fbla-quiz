import React from "react";
import "../../assets/css/Matching.css";

/**
 * The Matching type of quiz question.
 * @param {*} props the props passed in by the Questions.js file.
 */
export default function Matching(props) {
    return (
        <div className="form-group container">
            <label htmlFor="numberQuestions">{props.content}</label>
            <div className="row">
                <div className="col select-col">
                    <select className="form-control" required>
                        <option value = "">-----------------</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <select className="form-control" required>
                        <option value = "">-----------------</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <select className="form-control" required>
                        <option value = "">-----------------</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <select className="form-control" required>
                        <option value = "">-----------------</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                </div>
                <div className="col letters">
                    <span>A. {props.option_one} <br /></span>
                    <span>B. {props.option_two} <br /></span>
                    <span>C. {props.option_three} <br /></span>
                    <span>D. {props.option_four} <br /></span>
                </div>
            </div>

        </div>
    );
}