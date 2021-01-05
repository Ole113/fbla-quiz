import React from "react";

/**
 * The True/False question type.
 * @param {Object} props The props passed in by the Questions.js file.
 */
export default class TF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            value: "",
        };
    }

    /**
     * Sends the id and value back to the parent class with a callback.
     */
    _sendQuestionValue() {
        this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer, type: "tf" });
    }

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    _handleChange(event) {
        //There has to be a way to know which answer corresponds to which question
        this.setState({ id: this.props.content, value: event.target.value, answer: this.props.answer, type: "tf" }, () => {
            this._sendQuestionValue();
        });
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="numberQuestions">{this.props.content}</label>
                <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" onChange={this._handleChange} required />
            </div>
        );
    }
}