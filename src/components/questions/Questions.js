import React from "react";

import Matching from "./Matching.js";
import TF from "./TF.js";
import Multiple from "./Multiple.js";
import Blank from "./Blank.js";

import Modal from "../Modal.js";

/**
 *
 */
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [];
        this.currentType = "Random";
        this.state = {
            data: null
        }
        this.renderedIDs = [];
        this.questionValues = [];
    }

    /**
     * When the component mounts the data is fetched from the API and the component's state is set to the data returned from the fetch call.
     */
    componentDidMount() {
        fetch(this.props.apiURL)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(`An error occurred. ${err}, most likely the server hasn't been started yet. Start the server with "node server.js" in the database directory.`));
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
     * @param {Number} id The question id/number.
     * @param {Array} res The response from the fetch call.
     */
    _getQuestionInfo(id, res, type) {

        const RANDOM_ID = Math.floor(Math.random() * res.length);

        /**
         * This method gets 4 questions that have type matching because matching needs 4 questions.
         */
        const RENDER_MATCHING = () => {
            let ids = [];
            for (let i = 0; i < 4; i++) ids.push(this._findTypeID(res, RANDOM_ID, "matching"));
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
     * 
     * @param {Object} res 
     * @param {Number} id 
     * @param {String} type 
     */
    _findTypeID(res, id, type) {
        //need to randomize the question answers.

        const RENDER_ANSWER = (question) => {
            //Because the first option is always the right answer the correct value needs to be recorded before the answers are randomized.
            const QUESTION_ANSWER = question.option_one;

            function randomizeOptions() {
                let randomizedOptions = [];

                const FIND_OPTION = (randomNumber) => {
                    randomizedOptions.push(
                        randomNumber === 1
                        ? question.option_one
                        : randomNumber === 2
                            ? question.option_two
                            : randomNumber === 3
                                ? question.option_three
                                : question.option_four
                    );
                }
                for(let i = 0; i < 4; i++) {
                    let randomOptionNumber = Math.floor(Math.random() * 4) + 1;
                    
                    //problem is that randomOptions gets the strings added to it not the number
                    if(!randomizedOptions.includes(randomOptionNumber)) {
                        //console.log(FIND_OPTION(1))
                        FIND_OPTION(randomOptionNumber);
                        console.log(randomizedOptions);
                    }
                    else {
                        console.log("ERR" + FIND_NEW_ID(4, randomizedOptions))
                    }

                }
                //console.log(FIND_OPTION(1));
                //console.log(randomizedOptions);
                return randomizedOptions;
            }

            return {
                content: question.content,
                answer: QUESTION_ANSWER,
                optionOne: randomizeOptions()[0],
                optionTwo: randomizeOptions()[1],
                optionThree: randomizeOptions()[2],
                optionFour: randomizeOptions()[3],
            }
        }
                
        /**
         * This method finds an id that hasn't been rendered yet and is the correct type.
         * @param {Number} length The length of the item that a new id needs to be found for.
         */
        const FIND_NEW_ID = (length, object) => {
            let i = 0;
            for(; i < length; i++) {
                if(!object.includes(i) && type === res[i].category) {
                    object.push(i);
                    break;
                }
            }
            return i;
        }

        if (!this.renderedIDs.includes(id)) {
            if (type === res[id].category) {
                this.renderedIDs.push(id);
                return RENDER_ANSWER(res[id]);
            }
            else return RENDER_ANSWER(res[FIND_NEW_ID(res.length - 1, this.renderedIDs)]);
        }
        else return RENDER_ANSWER(res[FIND_NEW_ID(res.length - 1, this.renderedIDs)]);
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
     * @param {Integer} id The id of the question to get.
     */
    _getQuestionTag(id, res) {
        //Sets the value of question info using conditionals.
        let questionInfo = this.props.type === "True/False" ? this._getQuestionInfo(id, res, "tf") : this.props.type === "Matching" ? this._getQuestionInfo(id, res, "matching") : this._getQuestionInfo(id, res, "multi");

        if (this.props.type === "Random") {
            /*
            If the question type is random then _getQuestionInfo doesn't know what information it should return because question types like TF or Matching require different info than the other question types of multi.
            If _getQuestionInfo knows the random number and knows what types of questions will be rendered corresponding to the number then the method is able to return the correct information for the random question.
            */
            let randomNumber = Math.floor(Math.random() * 4);
            questionInfo = this._getQuestionInfo(id, res, randomNumber);
            return randomNumber === 0 ? <Blank key={id} content={questionInfo.content} answer={questionInfo.answer} />
                : randomNumber === 1 ? <Multiple key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} />
                    : randomNumber === 2 ? <TF key={id} content={questionInfo.content} />
                        : <Matching key={id} optionOne={questionInfo[0].optionOne} optionTwo={questionInfo[1].optionTwo} optionThree={questionInfo[2].optionThree} optionFour={questionInfo[3].optionFour} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple id={id} key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} />;
        else if (this.props.type === "Fill in the blank") return <Blank key={id} content={questionInfo.content} onChange={this.props.onChange} sendQuestionValue={this.handleQuestionValue} />;
        else if (this.props.type === "True/False") return <TF key={id} content={questionInfo.content} />;
        else if (this.props.type === "Matching") return <Matching key={id} optionOne={questionInfo[0].optionOne} optionTwo={questionInfo[1].optionTwo} optionThree={questionInfo[2].optionThree} optionFour={questionInfo[3].optionFour} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} />;
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

    handleQuestionValue = (data) => {
        if (this.questionValues.length === 0) this.questionValues.push({ data });
        for (let i = 0; i < this.questionValues.length; i++) {
            if (data.id === this.questionValues[i].data.id) {
                this.questionValues[i].data.value = data.value;
                //console.log(this.questionValues[i].data.value);
                break;
            } else {
                this.questionValues.push({ data });
                break;
            }
        }
        /*
        TODO:
        What needs to be done now is to make it so when the user updates their answer question
        the questionValues index that has the correct id is updated and a new index isn't created.
        
        */
    }

    /**
     * Renders the questions.
     */
    render() {
        if(this.renderedIDs.length === 0) {
            this._renderError("There were either not enough True/False question types or not enough Multiple choice question types.", "")
        }

        //this.getQuestionContent();
        if (this.state.data == null) return <div>
            <h1>Loading...</h1><br />
            <p>
                If this message persists then an error has occurred. Most likely the database server is not online.
                <br />To turn it on navigate to the database directory with <code>cd src/database</code> and run the command <code>node server.js</code>.
            </p>
        </div>
        try { let testVariable = this.state.data[this.props.number].category; }
        catch (err) {
            this._renderError("The number of questions that are requested to render is more questions than are in the database.", err);
            // return <Modal
            //     id="helpModal"
            //     type="error"
            //     title="An Error Occurred"
            //     body="Error Body"
            // />
        }
        return this._setOutput(this.state.data);
    }
}