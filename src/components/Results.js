import React from "react";

import "../assets/css/Results.css";

/**
 * 
 */
export default class Results extends React.Component {

    constructor(props) {
        super(props);
        this.answers = [
            {
                data: {
                    answer: "Blue and gold",
                    id: "What are the official colors of FBLA?",
                    type: "multiple",
                    value: "Blue and gold"
                }
            },
            {
                data: {
                    answer: "1940",
                    id: "When was FBLA founded?",
                    type: "multiple",
                    value: "1937"
                }
            },
            {
                data: {
                    answer: "Seven",
                    id: "The FBLA creed contains how many stanzas?",
                    type: "multiple",
                    value: "Nine"
                }
            },
            {
                data: {
                    answer: "Nine",
                    id: "There are how many FBLA goals?",
                    type: "multiple",
                    value: "Five"
                }
            },
            {
                data: {
                    answer: "Three years",
                    id: "Excluding the three division presidents, what is the term of office for National Board of Director members?",
                    type: "multiple",
                    value: "Two years"
                }
            }
        ];
    }

    _getNumberCorrect() {
        let totalCorrect = 0;
        this.answers.forEach(answer => {
            if (answer.data.answer === answer.data.value) totalCorrect++;
        });
        return totalCorrect;
    }

    _modifyAnswersTypes() {
        this.answers.forEach(answers => {
            let questionType = answers.data.type;
            if (questionType === "multiple") answers.data.type = "Multiple choice";
            else if (questionType === "tf") answers.data.type = "True/False";
            else if (questionType === "matching") answers.data.type = "Matching";
        });
    }

    _getRenderResult(index) {
        if (this.answers[index].data.value === this.answers[index].data.answer) {
            return (
                <div className="result-question-info">
                    <h5>{index + 1}. {this.answers[index].data.id}</h5>
                    <h6><img className="result-icon" src={require("../assets/images/checkBox.svg")} />{this.answers[index].data.answer}</h6>
                </div>
            );
        }
        return (
            <div className="result-question-info">
                <h5>{index + 1}. {this.answers[index].data.id}</h5>
                <h6><img className="result-icon" src={require("../assets/images/crossBox.svg")} />Your answer: {this.answers[index].data.value}</h6>
                <h6>Correct answer: {this.answers[index].data.answer}</h6>
            </div>
        );
    }

    _renderQuestionResults() {
        this._modifyAnswersTypes();
        return (
            <div>
                {this._getRenderResult(0)}
                {this._getRenderResult(1)}
                {this._getRenderResult(2)}
                {this._getRenderResult(3)}
                {this._getRenderResult(4)}
            </div>
        );
    }

    render() {
        console.log(this.props.startTime);
        console.log(this.props.timeSubmitted);
        return (
            <div className="Results">
                <div className="card card-results">
                    <div className="card-body">
                        <h5 className="card-title">Quiz Results<button className="print-button" onClick={function print() { window.print() }}>Print</button></h5>
                        <hr className="hr-result-title" />
                        <div className="row">
                            <div className="col">
                                <h6 className="gray-font">Your score is</h6>
                                <h1 style={{ display: "inline-block" }}>{(this._getNumberCorrect() / this.props.totalQuestions) * 100}%</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total number correct</h6>
                                <h1 style={{ display: "inline-block" }}>{this._getNumberCorrect()}/{this.props.totalQuestions}</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total time taken</h6>
                                <h1 style={{ display: "inline-block" }}>{this.props.time}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div style={{paddingRight: "0px"}} className="col-5">
                            <div style={{marginRight: "0px"}} className="card card-results">
                                <div className="card-body">
                                    {this._renderQuestionResults()}
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{paddingLeft: "0px"}} className="card card-results">
                                <div className="card-body">
                                    {this._renderQuestionResults()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}