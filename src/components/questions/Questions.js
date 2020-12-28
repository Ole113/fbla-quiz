import React from "react";

import Matching from "./Matching.js";
import TF from "./TF.js";
import Multiple from "./Multiple.js";
import Blank from "./Blank.js";

import Modal from "../Modal.js";

/**
 * Handles rendering the questions and getting the user answer from the questions.
 */
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.questions = []; //Questions is the array with all the html questions in it such as <TF /> or <Blank />
        this.currentType = "Random";
        this.state = {
            data: null //The data is the data of all the questions returned by _findTypeID. It will be an array of all the questions.
        }
        this.renderedIDs = []; //The IDs of all the questions that have already been rendered.
        this.questionValues = []; //The values that the user has input for all the question answers.
    }

    /**
     * When the component mounts the data is fetched from the API and the component's state is set to the data returned from the fetch call.
     */
    componentDidMount() {
        fetch(this.props.apiURL)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(`An error occurred in Questions.js componentDidMount(). ${err}`));
    }

    _catchError(id, res) {
        /*
        If the numbers of questions in the database is less than the number of questions the user is requesting then an error will be thrown.
        If this is true then the error is logged and a user friendly error message pops up.
        */
        try { let testVariable = res[id].category; }
        catch (err) {
            console.error(`The number of questions that are requested to render is more questions than are in the database. ${err}`);
            //Show modal here.
            return <Modal
                title="An Error Occurred"
                body="Error Body"
            />
        }
    }

    /**
     * Calls the _findTypeID method with the correct type.
     * @param {Array} res The response from the fetch call.
     * @param {String} type The type of the question to be rendered.
     */
    _getQuestionInfo(res, type) {
        //A random id that is the length of the whole question array this is the random question that will be rendered unless it's already been rendered if this is the case then _findTypeID will find a new random question.
        const RANDOM_ID = Math.floor(Math.random() * res.length);

        /**
         * This method gets 4 questions that have type matching because matching needs 4 questions.
         */
        const RENDER_MATCHING = () => {
            let ids = [];
            for (let i = 0; i < 4; i++) ids.push(this._findTypeID(res, RANDOM_ID, "multi"));
            return ids;
        }

        //Matching question types needs to have 4 questions returned not just 1 like the other question types.
        if (type === "matching") return RENDER_MATCHING();

        /*
        If the question needs to be random a number will be passed in which represents the question type. The number will be a randomly chosen.
        The condition checks if the passed in type is a string or a number. If it is a string then the type will be matching, else it will be a randomly chosen question.
        */
        else if (!isNaN(Number(type))) {
            return type === 2 ? this._findTypeID(res, RANDOM_ID, "tf")
                : type === 3 ? RENDER_MATCHING()
                    : this._findTypeID(res, RANDOM_ID, "multi");
        }
        //If the type is not matching or a random question then the type will be either True/False or Multi.
        else return this._findTypeID(res, RANDOM_ID, type);
    }

    /**
     * Returns all the information about the random question including the randomized options, the correct answer, and the question title.
     * @param {Object} res The original res of the fetch API call.
     * @param {Number} id The question id that will be rendered unless it's already been rendered.
     * @param {String} type The type of the question which can be either multi, tf, or matching.
     */
    _findTypeID(res, id, type) {
        /**
         * Returns an object that contains all the information about the question that will be rendered with the question answers randomized.
         * @param {Object} question The question object that has all the question information.
         */
        const RENDER_ANSWER = (question) => {
            //Because the first option is always the right answer the correct value needs to be recorded before the answers are randomized.
            const QUESTION_ANSWER = question.option_one;

            /**
             * Randomizes the options that are in the question object.
             */
            function randomizeOptions() {
                let randomizedOptionsNumbers = [];
                let randomizedOptionsStrings = [];

                /**
                 * Uses the number that is passed in to get the correct question answer from the question parameter.
                 * @param {Number} randomNumber The random number to find the correct string for.
                 */
                const FIND_OPTION = (randomNumber) => {
                    randomizedOptionsStrings.push(
                        randomNumber === 1
                            ? question.option_one
                            : randomNumber === 2
                                ? question.option_two
                                : randomNumber === 3
                                    ? question.option_three
                                    : question.option_four
                    );
                }

                /**
                 * Fills up the randomizedOptionsNumbers array with numbers that will never be the same as each other.
                 */
                for (let i = 0; i < 4; i++) {
                    let randomOptionNumber = Math.floor(Math.random() * 4) + 1;

                    if (randomizedOptionsNumbers.includes(randomOptionNumber)) {
                        FIND_NEW_ID(1, 4, randomizedOptionsNumbers);
                    } else randomizedOptionsNumbers.push(randomOptionNumber);

                    FIND_OPTION(randomizedOptionsNumbers[i]);

                }
                return randomizedOptionsStrings;
            }

            const randomAnswers = randomizeOptions();

            return {
                content: question.content,
                answer: QUESTION_ANSWER,
                optionOne: randomAnswers[0],
                optionTwo: randomAnswers[1],
                optionThree: randomAnswers[2],
                optionFour: randomAnswers[3]
            }
        }

        /**
         * Finds a new id that hasn't already been rendered in the arr parameter.
         * @param {Number} min The min number that a new id can be found from.
         * @param {Number} max The max number that a new id can be found from.
         * @param {Object} arr The object that the new id will be pushed to.
         */
        const FIND_NEW_ID = (min, max, arr) => {
            let i = min;
            for (; i < max; i++) {
                if (!arr.includes(i) && type === res[i].category) {
                    arr.push(i);
                    break;
                }
            }
            return i;
        }

        //Checks if the question has already been rendered, if so then a new question will be found.
        if (!this.renderedIDs.includes(id)) {
            if (type === res[id].category) {
                this.renderedIDs.push(id);
                return RENDER_ANSWER(res[id]);
            }
            else return RENDER_ANSWER(res[FIND_NEW_ID(0, res.length - 1, this.renderedIDs)]);
        }
        else return RENDER_ANSWER(res[FIND_NEW_ID(0, res.length - 1, this.renderedIDs)]);
    }

    /**
     * 
     * @param {String} title 
     * @param {String} body 
     */
    _renderError(title, body) {
        console.error(title + " " + body);
    }

    /**
     * Gets the question to be added to the array in setOutput.
     * Each element needs to have a key or it will throw a warning: "Warning: Each child in a list should have a unique "key" prop."
     * @param {Number} id The id of the question to get.
     * @param {Object} res The api result.
     */
    _getQuestionTag(id, res) {
        //Sets the value of question info using conditionals.
        let questionInfo = this.props.type === "True/False" ? this._getQuestionInfo(res, "tf") : this.props.type === "Matching" ? this._getQuestionInfo(res, "matching") : this._getQuestionInfo(res, "multi");

        if (this.props.type === "Random") {
            /*
            If the question type is random then _getQuestionInfo doesn't know what information it should return because question types like TF or Matching require different info than the other question types of multi.
            If _getQuestionInfo knows the random number and knows what types of questions will be rendered corresponding to the number then the method is able to return the correct information for the random question.
            */
            let randomNumber = Math.floor(Math.random() * 4);
            questionInfo = this._getQuestionInfo(res, randomNumber);
            return randomNumber === 0 ? <Blank key={id} content={questionInfo.content} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />
                : randomNumber === 1 ? <Multiple key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />
                    : randomNumber === 2 ? <TF key={id} content={questionInfo.content} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />
                        : <Matching key={id} contentOne={questionInfo[0].content} contentTwo={questionInfo[1].content} contentThree={questionInfo[2].content} contentFour={questionInfo[3].content} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple id={id} key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />;
        else if (this.props.type === "Fill in the blank") return <Blank key={id} content={questionInfo.content} onChange={this.props.onChange} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />;
        else if (this.props.type === "True/False") return <TF key={id} content={questionInfo.content} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />;
        else if (this.props.type === "Matching") return <Matching key={id} contentOne={questionInfo[0].content} contentTwo={questionInfo[1].content} contentThree={questionInfo[2].content} contentFour={questionInfo[3].content} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} answer={questionInfo.answer} sendQuestionValue={this._handleQuestionValue} />;
    }

    /**
     * Returns the questions instance variable value and appropriately removes/adds to the questions variable.
     * @param {Array} res The response from the fetch call.
     */
    _setOutput(res) {
        //Checks if the question type has been changed.
        if (this.currentType !== this.props.type) {
            this.questions = [];
            this.renderedIDs = [];
            this.currentType = this.props.type;
        }

        if (this.props.number > this.questions.length) for (let key = this.questions.length; key < this.props.number; key++) this.questions.push(this._getQuestionTag(key, res));
        else if (this.props.number < this.questions.length) for (let i = 0; i < this.questions.length - this.props.number + 1; i++) this.questions.pop();

        return this.questions;
    }

    /**
     * Handles when the user updates their answer.
     * @param {Object} data The object of the data.
     */
    _handleQuestionValue = (data) => {
        //If theres isn't a value in the array then it's impossible for the new data to be a multiple.
        if (this.questionValues.length === 0) this.questionValues.push({ data });

        //Loops through the questionValues array and if the data ID the same as an element already in the array then that element is updated, else a new array index is added.
        for (let i = 0; i < this.questionValues.length; i++) {
            if (data.id === this.questionValues[i].data.id) {
                this.questionValues[i].data.value = data.value;
                break;
            } else if (i === this.questionValues.length - 1) {
                this.questionValues.push({ data });
                break;
            }
        }
    }

    /**
     * Checks if the form has been submitted.
     * Originally this code was in the render method but this error occurred and the solution was to use componentDidUpdate()
     * Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
     */
    componentDidUpdate() {
        if (this.props.submitStatus) {
            this.props.sendUserAnswers(this.questionValues);
            return <div>
                <h1>Loading the quiz results...</h1>
                <br />
                <p>If this message persists then an error has occurred.</p>
            </div>
        }
    }

    /**
     * Renders the questions.
     */
    render() {
        /**
         * THIS NEEDS TO BE FIXED BECAUSE AT THE START OF THE PROGRAM THE RENDERED IDS WILL BE EMPTY
         * Check in componentDidMount maybe
         */
        if (this.renderedIDs.length === 0) {
            this._renderError("There were either not enough True/False question types or not enough Multiple choice question types.", "")
        }

        if (this.state.data == null) return <div>
            <h1>Loading...</h1>
            <br />
            <p>
                If this message persists then an error has occurred. Most likely the database server is not online.
                    <br />To turn it on navigate to the database directory with <code>cd src/database</code> and run the command <code>node server.js</code>.
                </p>
        </div>
        try { let testVariable = this.state.data[this.props.number].category; }
        catch (err) {
            this._renderError("The number of questions that are requested to render is more questions than are in the database.", err);
        }
        return this._setOutput(this.state.data);
    }
}