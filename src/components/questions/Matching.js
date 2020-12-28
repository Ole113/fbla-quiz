import React from "react";
import "../../assets/css/Matching.css";

/**
 * The Matching type of quiz question.
 * @param {Object} props the props passed in by the Questions.js file.
 */
export default class Matching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            value: ""
        };
    }

    /**
     * Sends the id and value back to the parent class with a callback.
     */
    _sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer, type: "matching" });

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    _handleChange = (event) => {
        let eventID = event.target.id;

        //Sets the value of content which is the question that the user has answered.
        let content = eventID === "selectOne"
            ? this.props.contentOne
            : eventID === "selectTwo"
                ? this.props.contentTwo
                : eventID === "selectThree"
                    ? this.props.contentThree
                    : this.props.contentFour

        //Sets the value of answer because which select that is being modified is unknown.
        let answer = eventID === "selectOne"
            ? this.props.answerOne
            : eventID === "selectTwo"
                ? this.props.answerTwo
                : eventID === "selectThree"
                    ? this.props.answerThree
                    : this.props.answerFour

        //Sets the state of the class.
        this.setState({ id: content, value: event.target.value, answer: answer, type: "matching" }, () => {
            this._sendQuestionValue();
        });
    }

    /**
     * Renders the Matching question type.
     */
    render() {
        return (
            <div className="form-group container">
                {/* <label htmlFor="numberQuestions">{props.content}</label> */}
                <div className="row">
                    <div className="col select-col">
                        <select className="form-control" onChange={this._handleChange} id="selectOne" required>
                            <option>-----------------</option>
                            <option>{this.props.answerOne}</option>
                            <option>{this.props.answerTwo}</option>
                            <option>{this.props.answerThree}</option>
                            <option>{this.props.answerFour}</option>
                        </select>
                    </div>
                    <div className="col content-col">
                        <span>A. {this.props.contentOne} <br /></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col select-col">
                        <select className="form-control" onChange={this._handleChange} id="selectTwo" required>
                            <option>-----------------</option>
                            <option>{this.props.answerOne}</option>
                            <option>{this.props.answerTwo}</option>
                            <option>{this.props.answerThree}</option>
                            <option>{this.props.answerFour}</option>
                        </select>
                    </div>
                    <div className="col content-col">
                        <span>B. {this.props.contentTwo} <br /></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col select-col">
                        <select className="form-control" onChange={this._handleChange} id="selectThree" required>
                            <option>-----------------</option>
                            <option>{this.props.answerOne}</option>
                            <option>{this.props.answerTwo}</option>
                            <option>{this.props.answerThree}</option>
                            <option>{this.props.answerFour}</option>
                        </select>
                    </div>
                    <div className="col content-col">
                        <span>C. {this.props.contentThree} <br /></span>
                    </div>
                </div>
                <div style = {{paddingBottom: "25px"}} className="row">
                    <div className="col select-col">
                        <select className="form-control" onChange={this._handleChange} id="selectFour" required>
                            <option>-----------------</option>
                            <option>{this.props.answerOne}</option>
                            <option>{this.props.answerTwo}</option>
                            <option>{this.props.answerThree}</option>
                            <option>{this.props.answerFour}</option>
                        </select>
                    </div>
                    <div className="col content-col">
                        <span>D. {this.props.contentFour} <br /></span>
                    </div>
                </div>
            </div>
        );
    }
}