import React from "react";
import ScrollSpy from "./Scrollspy.js";
import QASections from "./QASection.js";
import Chatbot from "./Chatbot.js";
import "../assets/css/QA.css";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function QA() {
    return (
        <div style={{ paddingBottom: "150px" }} className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-2 col-2-qa">
                    <ScrollSpy
                        href={["#qaSection", "#faqSection"]}
                        titles={["Q&A", "FAQ"]}
                    />
                </div>
                <div className="col-10-qa col-10">
                    <QASections
                        id={"qaSection"}
                        title={"Q&A"}
                        body={
                            <Chatbot />
                        }
                    />
                    <br /><br /><br />
                    <QASections
                        id={"faqSection"}
                        title={"FAQs"}
                        body={
                            <div>
                                <i>Can custom questions be uploaded to FBLA Quiz?</i><br />
                                Yes, to upload custom questions go <a href="https://github.com/Ole113/fbla-quiz-2021/tree/master/src/database/questionCompiler">Here</a> to learn more.
                                <br /><br />
                                <i>What is the max number of questions on the quiz?</i><br />
                                The number of questions that are in the question database is the max number of questions that can be rendered.
                                <br />Excluding any custom questions there are 50 total questions in the database.
                                <br /><br />
                                <i>What technologies does FBLA Quiz use?</i><br />
                                FBLA Quiz uses a combination of Javascript and React with a Node.js backend. Question information uses MySQL.
                                <br /><br />
                                <i>What is the interval between the server backups?</i><br />
                                The interval between the server backup is 3 hours. This delay can be changed by modifying <code>server.js</code> in the database folder.
                                <br /><br />
                                <i>What is the max number of custom questions?</i><br />
                                There is no max number of questions as long as the SQL database will still hold the questions.
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}