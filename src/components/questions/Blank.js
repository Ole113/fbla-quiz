import React from "react";

/**
 * The Blank question type.
 * @param {Any} props The props passed in by the Questions.js file.
 */
export default class Blank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            value: "",
        };
    }

    sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer });

    handleChange = (event) => {
        //There has to be a way to know which answer corresponds to which question
        this.setState({ id: this.props.content, value: event.target.value, answer: this.props.answer }, () => {
            this.sendQuestionValue();
        });
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="numberQuestions">{this.props.content}</label>
                <input type="text" className="form-control" id="blankQuestion" aria-describedby="blankQuestion" placeholder="Type your answer here" onChange = {this.handleChange} required/>
            </div>
        );
    }
}