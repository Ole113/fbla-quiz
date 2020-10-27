import React from "react";
import ScrollSpy from "./ScrollspyVertical.js";
import QASections from "./QASection.js";
import Chatbot from "./Chatbot.js";
import "../assets/css/QA.css";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function QA() {
    return (
        <div style = {{paddingBottom: "150px"}} className="container">
            <div className="row">
                <div className="col-2">
                    <ScrollSpy />
                </div>
                <div className="col-10-qa">
                    <QASections 
                        id={"faq"} 
                        title={"FAQs"} 
                        body={
                            <div>
                                <i>Can custom questions be uploaded to FBLA Quiz?</i><br />
                                To upload custom questions go to <a href = "https://github.com/Ole113/fbla-quiz-2021/tree/master/src/database/questionCompiler">Here</a> to learn more. <br /><br />
                                <i>What is the max number of questions on the quiz?</i><br />
                                The number of questions that are in the question database. Excluding any custom questions there are 50 questions in the database. <br /><br />
                                <i>what technologies does FBLA Quiz use?</i><br />
                                FBLA Quiz uses a combination of Javascript and React with a Node.js backend. Question information uses MySQL. <br /><br />
                                <i></i>
                            </div>
                        } 
                    />
                    <QASections 
                        id={"forum"} 
                        title={"Forum"} 
                        body={
                            <Chatbot />
                        }
                    />
                </div>
            </div>
        </div>
    );
}