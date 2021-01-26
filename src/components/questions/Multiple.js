import React from "react";

/**
 * The Multiple question type.
 */
export default class Multiple extends React.Component {
    /**
     * Sets the state of the component.
     * @param {Object} props The properties passed in by the parent class.
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
    _sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.id, value: this.state.value, answer: this.props.answer, type: "multiple" });

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    _handleChange = (event) => {
        let value;
        const EVENT_ID = event.target.id;

        //Because you can't just use event.target.value to get the chosen answer because the answer text is a <label> so the correct text value needs to be found using the id of the input and corresponding that with the label's id. 
        if (EVENT_ID.includes("1")) value = document.getElementById(`questionLabel1${this.props.id}`).innerText;
        else if (EVENT_ID.includes("2")) value = document.getElementById(`questionLabel2${this.props.id}`).innerText;
        else if (EVENT_ID.includes("3")) value = document.getElementById(`questionLabel3${this.props.id}`).innerText;
        else if (EVENT_ID.includes("4")) value = document.getElementById(`questionLabel4${this.props.id}`).innerText;

        this.setState({ id: this.props.content, value: value, answer: this.props.answer, type: "multiple" }, () => {
            this._sendQuestionValue();
        });
    }

    /**
     * Renders the multiple choice question type with the correct information.
     */
    render() {
        return (
            <div className="form-group">
                <label htmlFor="numberQuestions">{this.props.content}</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`questionRadios${this.props.id}`} id={`questionRadios1${this.props.id}`} value="radio1" onChange={this._handleChange} required />
                    <label className="form-check-label" htmlFor={`questionRadios1${this.props.id}`} id={`questionLabel1${this.props.id}`}>
                        {this.props.optionOne}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`questionRadios${this.props.id}`} id={`questionRadios2${this.props.id}`} value="radio2" onChange={this._handleChange} required />
                    <label className="form-check-label" htmlFor={`questionRadios2${this.props.id}`} id={`questionLabel2${this.props.id}`}>
                        {this.props.optionTwo}
                    </label>
                </div >
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`questionRadios${this.props.id}`} id={`questionRadios3${this.props.id}`} value="radio3" onChange={this._handleChange} required />
                    <label className="form-check-label" htmlFor={`questionRadios3${this.props.id}`} id={`questionLabel3${this.props.id}`}>
                        {this.props.optionThree}
                    </label>
                </div >
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`questionRadios${this.props.id}`} id={`questionRadios4${this.props.id}`} value="radio4" onChange={this._handleChange} required />
                    <label className="form-check-label" htmlFor={`questionRadios4${this.props.id}`} id={`questionLabel4${this.props.id}`}>
                        {this.props.optionFour}
                    </label>
                </div >
            </div>
        );
    }
}