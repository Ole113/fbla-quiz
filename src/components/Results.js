import React from "react";

import "../assets/css/Results.css";

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

    render() {
        return (
            <div className="Results">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Quiz Results</h5>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <h5>Your score is</h5>
                                <h1 style={{ display: "inline-block" }}>{(this._getNumberCorrect() / this.props.totalQuestions) * 100}%</h1>
                            </div>
                            <div className="col">
                                <h5>Total number correct</h5>
                                <h1 style={{ display: "inline-block" }}>{this._getNumberCorrect()}/{this.props.totalQuestions}</h1>
                            </div>
                            <div className="col">
                                <h5>Total time taken</h5>
                                <h1 style={{ display: "inline-block" }}>{this.props.time}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">

                    </div>
                </div>
            </div>
        );
    }
}