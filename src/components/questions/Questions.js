import React from "react";

import Matching from "./Matching.js";
import TF from "./TF.js";
import Multiple from "./Multiple.js";
import Blank from "./Blank.js";

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
     * 
     */
    componentDidMount() {
        fetch(this.props.apiURL)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(err + ", most likely the server hasn't been started yet. Start the server with \"node server.js\"."));
    }

    /**
     * 
     * @param {Number} id 
     * @param {Array} res The response from the fetch call.
     */
    _getQuestionInfo(id, res) {
        /* 
        need to randomize the questions and the options.
        option_one will always originally be the correct one but when its returned the options need to be randomized.
        multiple questions cannot be rendered more than once so once a question is rendered its id needs to be added to a list to keep count of what has
        already been rendered and what can still be rendered
        if theres not enough content in the DB to render any more questions then appropriate error messages need to be applied.
        */
       let type = "matching";
        if (type === "matching") {
            let IDs = [];
            for (let i = 0; i < 4; i++) {
                IDs.push(this.findTypeID(res, id, type));
            }
            return IDs;
        } else return this.findTypeID(res, id, type);
    }

    /**
     * 
     * @param {Number} id 
     * @param {String} type 
     */
    findTypeID(res, id, type) {
        if (this.renderedIDs.contains(id)) {
            //id has not been rendered yet.
            if (type === res[id].type) {
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
            } else {
                //question id is the wrong type
                let i = 0;
                while (res[i].type !== type) {
                    i++;
                }
                let question = res[i];
                return {
                    content: question.content,
                    answer: question.answer,
                    option_one: question.option_one,
                    option_two: question.option_two,
                    option_three: question.option_three,
                    option_four: question.option_four,
                }
            }
        } else {
            //array doesn't contain the id(id has already been rendered)
            let i = 0;
            while (res[i].type !== type) {
                i++;
            }
            let question = res[i];
            return {
                content: question.content,
                answer: question.answer,
                option_one: question.option_one,
                option_two: question.option_two,
                option_three: question.option_three,
                option_four: question.option_four,
            }
        }
    }

    /**
     * Gets the question to be added to the array in setOutput.
     * Each element needs to have a key or it will throw a warning: "Warning: Each child in a list should have a unique "key" prop."
     * @param {Integer} id The id of the question to get
     */
    _getQuestionTag(id, res) {
        let questionInfo = this._getQuestionInfo(id, res);
        if (this.props.type === "Random") {
            let randomNumber = Math.floor(Math.random() * 4);
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
        return this._setOutput(this.state.data);
    }
}
