import React from "react";

/**
 * The Blank question type.
 * @param {Any} props The props passed in by the Questions.js file.
 */
export default class Blank extends React.Component {
    /**
     * Holds the state of Blank.
     * @param {Object} props 
     */
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
    sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer });

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    handleChange = (event) => {
        //There has to be a way to know which answer corresponds to which question
        this.setState({ id: this.props.content, value: event.target.value, answer: this.props.answer }, () => {
            this.sendQuestionValue();
        });
    }

    /**
     * Renders a blank question type.
     */
    render() {
        return (
            <div className="form-group">
                <label htmlFor="numberQuestions">{this.props.content}</label>
                <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" onChange={this.handleChange} required />
            </div>
        );
    }
}