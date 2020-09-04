import React from "react";

import Matching from "./Matching.js";
import TF from "./TF.js";
import Multiple from "./Multiple.js";
import Blank from "./Blank.js";

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [];
        this.currentType = "Random";
        this.state = {
            data: null,
            
        }
    }

    setQuestionState() {
        fetch("http://localhost:5000/questions")
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                data: data,

            }))
        .catch(err => console.error(err));
        console.log(this.state + "FF")
    }

    getQuestionInfo(id) {
        return {
            content: "this.state.data"
        }
    }

    /**
     * Gets the question to be added to the array in setOutput.
     * Each element needs to have a key or it will throw a warning: "Warning: Each child in a list should have a unique "key" prop."
     * @param {Integer} id  the id of the question to get
     */
    getQuestionTag(id) {
        if (this.props.type === "Random") {
            let randomNumber = Math.floor(Math.random() * 4);
            return randomNumber === 0 ? <Blank key={id} content={this.getQuestionInfo(id)} />
                : randomNumber === 1 ? <Multiple key={id} getQuestionInfo={this.getQuestionInfo(id)} />
                    : randomNumber === 2 ? <TF key={id} getQuestionInfo={this.getQuestionInfo(id)} />
                        : <Matching key={id} getQuestionInfo={this.getQuestionInfo(id)} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple key={id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "Fill in the blank") return <Blank key={id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "True/False") return <TF key={id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "Matching") return <Matching key={id} getQuestionInfo={this.getQuestionInfo(id)} />;
    }

    setOutput() {
        if (this.currentType !== this.props.type) {
            this.questions = [];
            this.currentType = this.props.type;
        }

        if (this.props.number > this.questions.length) for (let key = this.questions.length; key < this.props.number; key++) this.questions.push(this.getQuestionTag(key));
        else if (this.props.number < this.questions.length) for (let i = 0; i < this.questions.length - this.props.number + 1; i++) this.questions.pop();

        return this.questions;
    }


    render() {
        if(this.state.data === null) {
            this.setQuestionState();
        } else {
            return this.setOutput();
        }
        return "";
    }
}