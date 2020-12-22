import React from "react";
import "../assets/css/Quiz.css";

/**
 * Handles the quiz options.
 */
export default class QuizOptions extends React.Component {
    /**
     * Sets the state to an initial value and calls super on the props.
     * @param {Any} props 
     */
    constructor(props) {
        super(props);
        this.state = { type: "Random", number: "5" };
    }

    /**
     * The callback function that passes data into the onChangeOption function.
     */
    handleOption = () => this.props.onChangeOption({ type: this.state.type, number: this.state.number });

    /**
     * Checks when the quiz options have been changed and updates the state.
     * @param {Object} e The event of the change, is set by the browser.
     */
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.handleOption();
        });
    }

    /**
     * Renders the quiz options and deals with the changing quiz options.
     */
    render() {
        return (
            <div className="quiz-options">
                <form>
                    <label htmlFor="questionsType">Type of Questions</label>
                    <select name = "type" className="form-control" id="questionsType" onChange={this.onChange}>
                        <option>Random</option>
                        <option>Multiple choice</option>
                        <option>Fill in the blank</option>
                        <option>True/False</option>
                        <option>Matching</option>
                    </select>
                    <br />
                    <div className="form-group">
                        <label htmlFor="numberQuestions">Number of Questions</label>
                        <input name = "number" onChange = {this.onChange} type="number" className="form-control" id="numberQuestions" aria-describedby="numberQuestions" defaultValue = "5" min = "1"/>
                    </div>
                </form>
            </div>
        );
    }
}