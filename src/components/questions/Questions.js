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
            data: null,
        }
        this.renderedIDs = [];
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
        //Matching question types needs to have 4 questions returned not just 1 like the other question types.
        if (type === "matching") {
            let ids = [];
            for (let i = 0; i < 4; i++) {
                ids.push(this._findTypeID(res, id, type));
            }
            return ids;
        }
        //If the question needs to be random a number will be passed in which represents the question type.
        else if (!isNaN(Number(type))) {
            console.log(type);
            return type === 2 ? this._findTypeID(res, id, "tf")
                : this._findTypeID(res, id, "multi");
        }
        //If the type is not matching or a random question then the type will be either True/False or Multi.
        else return this._findTypeID(res, id, type);
    }

    /**
     * 
     * @param {Number} id 
     * @param {String} type 
     */
    _findTypeID(res, id, type) {
        if (!this.renderedIDs.includes(id)) {
            //id has not been rendered yet
            if (type === res[id].category) {
                //question id is the right type
                let question = res[id];
                return {
                    content: question.content,
                    answer: question.answer,
                    option_one: question.option_one,
                    option_two: question.option_two,
                    option_three: question.option_three,
                    option_four: question.option_four,
                }
            }
            // else {
            //     //question id is the wrong type
            //     let i = 0;
            //     while (res[i].type !== type) {
            //         i++;
            //     }
            //     let question = res[i];
            //     return {
            //         content: question.content,
            //         answer: question.answer,
            //         option_one: question.option_one,
            //         option_two: question.option_two,
            //         option_three: question.option_three,
            //         option_four: question.option_four,
            //     }
            // }
        }
        else {

        }
        return {
            content: "An error occurred.",
            answer: "An error occurred.",
            option_one: "An error occurred.",
            option_two: "An error occurred.",
            option_three: "An error occurred.",
            option_four: "An error occurred.",
        }
        // else {
        //     if (type === res[id].type) {
        //         //question id is the right type
        //         let question = res[id];
        //         return {
        //             content: question.content,
        //             answer: question.answer,
        //             option_one: question.option_one,
        //             option_two: question.option_two,
        //             option_three: question.option_three,
        //             option_four: question.option_four,
        //         }
        //     } else {
        //         let question = res[id];
        //         return {
        //             content: question.content,
        //             answer: question.answer,
        //             option_one: question.option_one,
        //             option_two: question.option_two,
        //             option_three: question.option_three,
        //             option_four: question.option_four,
        //         }
        //     }
        // }
    }


    /**
     * 
     * @param {String} title 
     * @param {String} body 
     */
    _renderError(title, body) {

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
            return randomNumber === 0 ? <Blank key={id} content={questionInfo.content} />
                : randomNumber === 1 ? <Multiple key={id} content={questionInfo.content} option_one={questionInfo.option_one} option_two={questionInfo.option_two} option_three={questionInfo.option_three} option_four={questionInfo.option_four} />
                    : randomNumber === 2 ? <TF key={id} content={questionInfo.content} />
                        : <Matching key={id} content={questionInfo.content} option_one={questionInfo.option_one} option_two={questionInfo.option_two} option_three={questionInfo.option_three} option_four={questionInfo.option_four} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple key={id} content={questionInfo.content} option_one={questionInfo.option_one} option_two={questionInfo.option_two} option_three={questionInfo.option_three} option_four={questionInfo.option_four} />;
        else if (this.props.type === "Fill in the blank") return <Blank key={id} content={questionInfo.content} />;
        else if (this.props.type === "True/False") return <TF key={id} content={questionInfo.content} />;
        else if (this.props.type === "Matching") return <Matching key={id} content={questionInfo.content} option_one={questionInfo.option_one} option_two={questionInfo.option_two} option_three={questionInfo.option_three} option_four={questionInfo.option_four} />;
    }

    /**
     * Returns the questions instance variable value and appropriately removes/adds to the questions variable.
     * @param {Array} res The response from the fetch call.
     */
    _setOutput(res) {
        if (this.currentType !== this.props.type) {
            this.questions = [];
            this.currentType = this.props.type;
        }
        if (this.props.number > this.questions.length) for (let key = this.questions.length; key < this.props.number; key++) this.questions.push(this._getQuestionTag(key, res));
        else if (this.props.number < this.questions.length) for (let i = 0; i < this.questions.length - this.props.number + 1; i++) this.questions.pop();

        return this.questions;
    }

    /**
     * Renders the questions.
     */
    render() {
        if (this.state.data == null) return <h1>Loading...</h1>
        try { let testVariable = this.state.data[this.props.number].category; }
        catch (err) {
            console.error(`The number of questions that are requested to render is more questions than are in the database. ${err}`);
            return <Modal
                id="helpModal"
                type="error"
                title="An Error Occurred"
                body="Error Body"
            />
        }
        return this._setOutput(this.state.data);
    }
}