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
    }

    getQuestionInfo(id) {
        let xhttp;
        if (window.XMLHttpRequest) xhttp = new XMLHttpRequest();

        xhttp.open("GET", "questions.xml", false);
        xhttp.send();

        let xmlDoc = xhttp.responseXML;

        return {
            //content: xmlDoc.getElementsByTagName("content")[id].innerHTML,
            //answer: xmlDoc.getElementsByTagName("answer")[id].innerHTML
            content: "What are the FBLA Colors?",
            answer: "question answer"
        }
    }

    /**
     * Gets the question to be added to the array in setOutput.
     * Each element needs to have a key or it will throw a warning: "Warning: Each child in a list should have a unique "key" prop."
     * @param {Integer} id 
     */
    getQuestionTag(id) {
        if (this.props.type === "Random") {
            let randomNumber = Math.floor(Math.random() * 4);
            return randomNumber === 0 ? <Blank key = {id} getQuestionInfo={this.getQuestionInfo(id)} />
                : randomNumber === 1 ? <Multiple key = {id} getQuestionInfo={this.getQuestionInfo(id)} />
                    : randomNumber === 2 ? <TF key = {id} getQuestionInfo={this.getQuestionInfo(id)} />
                        : <Matching key = {id} getQuestionInfo={this.getQuestionInfo(id)} />;
        }
        else if (this.props.type === "Multiple choice") return <Multiple key = {id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "Fill in the blank") return <Blank key = {id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "True/False") return <TF key = {id} getQuestionInfo={this.getQuestionInfo(id)} />;
        else if (this.props.type === "Matching") return <Matching key = {id} getQuestionInfo={this.getQuestionInfo(id)} />;
    }

    setOutput() {
        if(this.currentType !== this.props.type) {
            this.questions = [];
            this.currentType = this.props.type;
        }

        if(this.props.number > this.questions.length) for(let key = this.questions.length; key < this.props.number; key++) this.questions.push(this.getQuestionTag(key));
        else if(this.props.number < this.questions.length) for(let i = 0; i < this.questions.length - this.props.number + 1; i++) this.questions.pop();

        return this.questions;
    }

    render() {
        return this.setOutput()
    }
}