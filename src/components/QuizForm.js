import React from "react";
import "../assets/css/Quiz.css";

import Matching from "./questions/Matching.js";
import TF from "./questions/TF.js";
import Multiple from "./questions/Multiple.js";
import Blank from "./questions/Blank.js";

export default class QuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.ids = [];
        this.output = "";
    }
    
    getQuestion(id) {
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

    setID() {
        for(let i = 0; i < this.props.number - 1; i++) this.ids[i] = i;
        //console.log(this.ids) 
    }

    questionRender() {
        if(this.props.type === "random") {
            this.ids.forEach( (element) => {
                let randomNumber = Math.floor(Math.random() * this.ids.length);
                if(randomNumber % 6 === 0) this.output += <Blank getQuestion = {this.getQuestion(element)} />;
                else if(randomNumber % 4 === 0) this.output += <Multiple getQuestion = {this.getQuestion(element)} />;
                else if(randomNumber % 2 === 0) this.output += <TF getQuestion = {this.getQuestion(element)} />;
                else this.output += <Matching getQuestion = {this.getQuestion(element)} />;
            });
        }
    }

    renderQuestions(question) {
        return question;
    }

    render() {

        this.setID();
        this.questionRender();
        console.log(this.output)
        return (
            <div className="card quiz-form-container">
                <form>
                    {this.renderQuestions()}
                </form>
            </div>
        );
    }

}