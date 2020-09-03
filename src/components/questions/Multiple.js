import React from "react";

export default function Multiple(props) {
    return (
        <div className="form-group">
            <label htmlFor="numberQuestions">{props.getQuestionInfo.content}</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="multipleRadios" value="multipleRadio1" />
                <label className="form-check-label" htmlFor="multipleRadios1">
                    {props.getQuestionInfo.option_one}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="multipleRadios" value="multipleRadios1" />
                <label className="form-check-label" htmlFor="multipleRadios2">
                    {props.getQuestionInfo.option_two}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="multipleRadios" value="multipleRadios1" />
                <label className="form-check-label" htmlFor="multipleRadios3">
                    {props.getQuestionInfo.option_three}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="multipleRadios" value="multipleRadios1" />
                <label className="form-check-label" htmlFor="multipleRadios4">
                    {props.getQuestionInfo.option_four}
                </label>
            </div>
        </div>
    );
}