import React from "react";
import "../../assets/css/Matching.css";

/**
 * The Matching type of quiz question.
 */
export default class Matching extends React.Component {
    /**
     * Sets the initial state of the class.
     * @param {Object} props The properties that the parent class passed in.
     */
    constructor(props) {
        super(props);
        this.state = {
            randomizedAnswers: [], //The array that contains the randomizedAnswers that will be rendered.
            correctAnswers: [this.props.answerOne, this.props.answerTwo, this.props.answerThree, this.props.answerFour], //The answers are passed in the correct order and that order needs to be preserved.
            userAnswers: [], //The answers that the user has chosen. Are compared against the correct answers.
            content: [this.props.contentOne, this.props.contentTwo, this.props.contentThree, this.props.contentFour] //The content of the question.
        };
    }

    /**
     * When the component mounts the randomized options won't be reset.
     */
    componentDidMount() {
        this.setState({ randomizedAnswers: this._getRandomizedOptions() });
    }

    /**
     * Sends the id and value back to the parent class with a callback.
     */
    _sendQuestionValue = () => this.props.sendQuestionValue({ id: this.state.content, value: this.state.userAnswers, answer: this.state.correctAnswers, type: "matching" });

    /**
     * Updates the Components state when the user updates their answer.
     * @param {Object} event The update event.
     */
    _handleChange = (event) => {
        const selectID = event.target.id;
        const selectValue = event.target.value;

        //Depending on what select was updated the correct index in userAnswers needs to be updated as well.
        if (selectID === "selectOne") this.state.userAnswers[0] = selectValue;
        else if (selectID === "selectTwo") this.state.userAnswers[1] = selectValue;
        else if (selectID === "selectThree") this.state.userAnswers[2] = selectValue;
        else if (selectID === "selectFour") this.state.userAnswers[3] = selectValue;

        //Sets the state of the class and calls the method that will send the question value to the parent class.
        this.setState({ userAnswers: this.state.userAnswers, answer: this.state.correctAnswers, type: "matching" }, () => {
            this._sendQuestionValue();
        });
    }

    /**
     * Randomizes the question answers.
     */
    _getRandomizedOptions() {
        //return an array of randomized answers. the correct answers will be the answers (this.props.answerOne)
        let answers = [this.props.answerOne, this.props.answerTwo, this.props.answerThree, this.props.answerFour];
        let randomizedAnswers = [];

        /**
         * Finds a new id that has not been added to the randomizedAnswers array.
         * Similar to the method in Questions.js that finds new ids if questions have already been rendered.
         * @param {Number} min The number to start at when looping.
         * @param {Number} max The number to go to when looping.
         * @param {Array} arr The array to loop over and check.
         */
        const FIND_NEW_ID = (min, max, arr) => {
            let i = min;
            for (; i < max; i++) {
                if (!arr.includes(answers[i])) {
                    return i;
                }
            }
            return i;
        }

        //Loops through the answers and adds them in a random order to the array.
        for (let i = 0; i < answers.length; i++) {
            let randomIndex = Math.floor(Math.random() * answers.length);

            if (randomizedAnswers.includes(answers[randomIndex])) {
                randomizedAnswers.push(answers[FIND_NEW_ID(0, answers.length, randomizedAnswers)]);
            } else randomizedAnswers.push(answers[randomIndex]);
        }

        return randomizedAnswers;
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
                            <option>{this.state.randomizedAnswers[0]}</option>
                            <option>{this.state.randomizedAnswers[1]}</option>
                            <option>{this.state.randomizedAnswers[2]}</option>
                            <option>{this.state.randomizedAnswers[3]}</option>
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
                            <option>{this.state.randomizedAnswers[0]}</option>
                            <option>{this.state.randomizedAnswers[1]}</option>
                            <option>{this.state.randomizedAnswers[2]}</option>
                            <option>{this.state.randomizedAnswers[3]}</option>
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
                            <option>{this.state.randomizedAnswers[0]}</option>
                            <option>{this.state.randomizedAnswers[1]}</option>
                            <option>{this.state.randomizedAnswers[2]}</option>
                            <option>{this.state.randomizedAnswers[3]}</option>
                        </select>
                    </div>
                    <div className="col content-col">
                        <span>C. {this.props.contentThree} <br /></span>
                    </div>
                </div>
                <div style={{ paddingBottom: "25px" }} className="row">
                    <div className="col select-col">
                        <select className="form-control" onChange={this._handleChange} id="selectFour" required>
                            <option>-----------------</option>
                            <option>{this.state.randomizedAnswers[0]}</option>
                            <option>{this.state.randomizedAnswers[1]}</option>
                            <option>{this.state.randomizedAnswers[2]}</option>
                            <option>{this.state.randomizedAnswers[3]}</option>
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