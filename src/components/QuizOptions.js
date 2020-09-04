import React from "react";
import "../assets/css/Quiz.css";

/**
 * 
 */
export default class QuizOptions extends React.Component {
    /**
     * 
     * @param {Any} props 
     */
    constructor(props) {
        super(props);
        this.state = { type: "Random", number: "5" };
    }

    handleOption = () => this.props.onChangeOption({ type: this.state.type, number: this.state.number });

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value }, ()=> {
            this.handleOption();
        });
    }

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