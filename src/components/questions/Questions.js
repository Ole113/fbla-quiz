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

        const RENDER_MATCHING = () => {
            let ids = [];
            for (let i = 0; i < 4; i++) {
                ids.push(this._findTypeID(res, id, type));
            }
            return ids;
        }

        //Matching question types needs to have 4 questions returned not just 1 like the other question types.
        if (type === "matching") return RENDER_MATCHING();
        //If the question needs to be random a number will be passed in which represents the question type.
        else if (!isNaN(Number(type))) {
            return type === 2 ? this._findTypeID(res, id, "tf")
                    : type === 3 ? RENDER_MATCHING()
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
                //Question id is the right type
                let question = res[id];
                //Because the first option is always the right answer the correct value needs to be recorded before the answers are randomized.
                const QUESTION_ANSWER = question.option_one;
                return {
                    content: question.content,
                    answer: QUESTION_ANSWER,
                    optionOne: question.option_one,
                    optionTwo: question.option_two,
                    optionThree: question.option_three,
                    optionFour: question.option_four,
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
            optionOne: "An error occurred.",
            optionTwo: "An error occurred.",
            optionThree: "An error occurred.",
            optionFour: "An error occurred.",
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
            if(randomNumber > 2) console.log(questionInfo);
            return randomNumber === 0 ? <Blank key={id} content={questionInfo.content} answer={questionInfo.answer} />
                : randomNumber === 1 ? <Multiple key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} />
                    : randomNumber === 2 ? <TF key={id} content={questionInfo.content} />
                        : <Matching key={id} optionOne={questionInfo[0].optionOne} optionTwo={questionInfo[1].optionTwo} optionThree={questionInfo[2].optionThree} optionFour={questionInfo[3].optionFour} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple id={id} key={id} content={questionInfo.content} optionOne={questionInfo.optionOne} optionTwo={questionInfo.optionTwo} optionThree={questionInfo.optionThree} optionFour={questionInfo.optionFour} answer={questionInfo.answer} />;
        else if (this.props.type === "Fill in the blank") return <Blank key={id} content={questionInfo.content} onChange = {this.props.onChange} sendQuestionValue={this.handleQuestionValue} />;
        else if (this.props.type === "True/False") return <TF key={id} content={questionInfo.content} />;
        else if (this.props.type === "Matching") return <Matching key={id} optionOne={questionInfo[0].optionOne} optionTwo={questionInfo[1].optionTwo} optionThree={questionInfo[2].optionThree} optionFour={questionInfo[3].optionFour} answerOne={questionInfo[0].answer} answerTwo={questionInfo[1].answer} answerThree={questionInfo[2].answer} answerFour={questionInfo[3].answer} />;
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

    handleQuestionValue = (data) => {
        if(this.questionValues.length === 0) this.questionValues.push({ data });
        for(let i = 0; i < this.questionValues.length; i++) {
            if(data.id === this.questionValues[i].data.id) {
                this.questionValues[i].data.value = data.value;
                console.log(this.questionValues[i].data.value);
                break;
            } else {
                this.questionValues.push({ data });
                break;
            }
            //console.log(i)
        }
        console.log(this.questionValues)
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
        //this.getQuestionContent();
        if (this.state.data == null) return <div>
            <h1>Loading...</h1><br />
            <p>
                If this message persists then an error has occurred. Most likely the database server is not online.
                <br/>To turn it on navigate to the database directory with <code>cd src/database</code> and run the command <code>node server.js</code>.
            </p>
        </div>
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