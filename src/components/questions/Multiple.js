import React from "react";

/**
 * 
 * @param {*} props 
 */
export default function Multiple(props) {
    return (
        <div className="form-group" required>
            <label htmlFor="numberQuestions">{props.content}</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="option_one" value="radio1" required />
                <label className="form-check-label" htmlFor="radio1">
                    {props.option_one}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="option_two" value="radio2" required/>
                <label className="form-check-label" htmlFor="radio2">
                    {props.option_two}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="option_three" value="radio3" required/>
                <label className="form-check-label" htmlFor="radio3">
                    {props.option_three}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="option_four" value="radio4" required/>
                <label className="form-check-label" htmlFor="radio4">
                    {props.option_four}
                </label>
            </div>
        </div>
    );
}