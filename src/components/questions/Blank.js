import React from "react";

/**
 * The Blank question type.
 */
export default class Blank extends React.Component {
    /**
     * Holds the state of Blank.
     * @param {Object} props The props from the parent class.
     */
    constructor(props) {
        super(props);
        this.state = {
            id: "", //The id of the question which is the content of the question.
            value: "" //The value of the question which is the what the user input.
        };
    }

    /**
     * Sends the id and value back to the parent class with a callback.
     */
    _sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer, type: "blank" });

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    _handleChange = (event) => {
        //There has to be a way to know which answer corresponds to which question
        this.setState({ id: this.props.content, value: event.target.value, answer: this.props.answer, type: "blank" }, () => {
            this._sendQuestionValue();
        });
    }

    /**
     * Renders a blank question type.
     */
    render() {
        return (
            <div className="form-group">
                <label htmlFor="numberQuestions">{this.props.content}</label>
                <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" onChange={this._handleChange} required />
            </div>
        );
    }
}