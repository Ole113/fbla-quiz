import React from "react";
import "../../assets/css/Matching.css";

/**
 * The Matching type of quiz question.
 * @param {*} props the props passed in by the Questions.js file.
 */
export default function Matching(props) {
    return (
        <div className="form-group container">
            {/* <label htmlFor="numberQuestions">{props.content}</label> */}
            <div className="row">
                <div className="col select-col">
                    <select className="form-control" required>
                        <option>-----------------</option>
                        <option>{props.answerOne}</option>
                        <option>{props.answerTwo}</option>
                        <option>{props.answerThree}</option>
                        <option>{props.answerFour}</option>
                    </select>
                    <select className="form-control" required>
                        <option>-----------------</option>
                        <option>{props.answerOne}</option>
                        <option>{props.answerTwo}</option>
                        <option>{props.answerThree}</option>
                        <option>{props.answerFour}</option>
                    </select>
                    <select className="form-control" required>
                        <option>-----------------</option>
                        <option>{props.answerOne}</option>
                        <option>{props.answerTwo}</option>
                        <option>{props.answerThree}</option>
                        <option>{props.answerFour}</option>
                    </select>
                    <select className="form-control" required>
                        <option>-----------------</option>
                        <option>{props.answerOne}</option>
                        <option>{props.answerTwo}</option>
                        <option>{props.answerThree}</option>
                        <option>{props.answerFour}</option>
                    </select>
                </div>
                <div className="col letters">
                    <span>A. {props.optionOne} <br /></span>
                    <span>B. {props.optionTwo} <br /></span>
                    <span>C. {props.optionThree} <br /></span>
                    <span>D. {props.optionFour} <br /></span>
                </div>
            </div>
        </div>
    );
}