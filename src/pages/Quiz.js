import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quiz from "../components/Quiz.js";
import Modal from "../components/Modal.js";

/**
 * Renders the quiz page with all its corresponding elements.
 */
export default function QuizPage() {
  return (
    <div className="Quiz">
      <Navbar color = "dark" active = "quiz" links = {["/", "/quiz", "/practice", "/qa"]} image = {require("../assets/images/fblaFlag.png")}/>
      <Modal title = "FBLA Quiz Help Menu" body = {<div><h3>Landing Page</h3> The landing page of FBLA Quiz contains basic information to help the user understand the function of FBLA Quiz and to help the user easily navigate the site. The navigation bar at the top helps to achieve this task.<br /><br /><h3>Quiz Page</h3> FBLA Quiz's <em>Quiz</em> section is where you can put your skills to practice and test your knowledge. The Quiz Section is split into 2 parts, the options part and the quiz part.<br /><h6>Quiz Options</h6> The quiz options section on the left side of the page is where you can determine the types of questions, and number of questions to be tested on. The amount of questions cannot be changed lower than 1. There are five types of questions: <em>random</em>, <em>fill in the blank</em>, <em>multiple choice</em>, <em>true/false</em>, and <em>matching</em>.<h6>Quiz</h6> On the right side of the Quiz page is the quiz section where the quiz questions are present. There will be at least 1 question. At the bottom of the questions is the submit button. Clicking the submit button will grade the quiz and display the results.<h3>Q&A Page</h3> ...<h3>Custom Quiz Questions / Advanced Features</h3> FBLA Quiz has custom quiz question integrations. To get started download the source code from the <a href = 'https://github.com/Ole113/fbla-quiz-2021'>GitHub repository</a>. Once the source code has been downloaded go to the <a href = 'https://github.com/Ole113/fbla-quiz-2021/tree/master/src/database/questionCompiler'>Question Compiler</a> and follow the instructions in the README.md file. Advanced Features can seamlessly be integrated because the source code is open source. This means that anyone can modify and change FBLA Quiz if they download the repository. This leads to an infinite amount of additional advanced features implemented by the community.</div>}/>
      <Quiz />
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}