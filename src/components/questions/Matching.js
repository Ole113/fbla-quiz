import React from "react";
import "../../assets/css/Matching.css";

export default function Matching(props) {
    return (
        <div className="form-group container">
            <label htmlFor="numberQuestions">{props.getQuestionInfo.content}</label>
            <div className="row">
                <div className="col select-col">
                    <select className="form-control">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <label className = "form-inline" htmlFor="numberQuestions">test</label>
                    <select className="form-control">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <select className="form-control">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                    <select className="form-control">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>
                </div>
                <div className="col letters">
                    <span>A. {props.getQuestionInfo.content} <br /></span>
                    <span>B. {props.getQuestionInfo.content} <br /></span>
                    <span>C. {props.getQuestionInfo.content} <br /></span>
                    <span>D. {props.getQuestionInfo.content} <br /></span>
                </div>
            </div>

        </div>
    );
}