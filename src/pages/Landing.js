import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Gradient from "../components/Gradient.js";
import Cards from "../components/Cards.js";
import Nav from "../components/Nav.js";
import Points from "../components/Points.js";
import Modal from "../components/Modal.js";

/**
 * Renders the landing page with all its corresponding elements.
 */
export default function Landing() {
  this.state = { clicked: false };

  const handleOption = (clicked) => this.setState({ clicked: clicked });

  return (
    <div className="Landing">
      <Navbar color = "white" active = "landing" links = {["/", "/quiz", "/practice", "/qa"]} image = {require("../assets/images/fblaFlag.png")}/>
      <Modal title = "FBLA Quiz Help Menu" body = "FBLA Quiz Help<h3>Landing Page</h3> The landing page of FBLA Quiz contains basic information to help the user understand the function of FBLA Quiz and to help the user easily navigate the site. The navigation bar at the top helps to achieve this task.<h3>Quiz Page</h3> FBLA Quiz's <em>Quiz<em> section is where you can put your skills to practice and test your knowledge. The Quiz Section is split into 2 parts, the options part and the quiz part.<br /><h6>Quiz Options</h6> The quiz options section on the left side of the page is where you can determine the types of questions, and number of questions to be tested on. The amount of questions cannot be changed lower than 1. There are five types of questions: <em>random</em>, <em>fill in the blank</em>, <em>multiple choice</em>, <em>true/false</em>, and <em>matching</em>.<h6>Quiz</h6> On the right side of the Quiz page is the quiz section where the quiz questions are present. There will be at least 1 question. At the bottom of the questions is the submit button. Clicking the submit button will grade the quiz and display the results.<h3>Q&A Page</h3> ...<h3>Custom Quiz Questions / Advanced Features</h3> FBLA Quiz has custom quiz question integrations. To get started download the source code from the <a href = 'https://github.com/Ole113/fbla-quiz-2021'>GitHub repository</a>. Once the source code has been downloaded go to the <a href = 'https://github.com/Ole113/fbla-quiz-2021/tree/master/src/database/questionCompiler'>Question Compiler</a> and follow the instructions in the README.md file. Advanced Features can seamlessly be integrated because the source code is open source. This means that anyone can modify and change FBLA Quiz if they download the repository. This leads to an infinite amount of additional advanced features implemented by the community."/>
      <Gradient />
      <Nav clicked = {this.state.clicked} links = {["/quiz"]}/>
      <Points contents = {["Customizable reports allows users to analyze information.", "More than 50 questions to study from.", "An intelligent and interactive Q&A section."]} icons = {[require("../assets/images/analytics.svg"), require("../assets/images/questions.svg"), require("../assets/images/forum.svg")]}/>
      <hr style = {{width: "60%", paddingBottom: "100px"}}/>
      <Cards images={[require("../assets/images/mountains.jpg"), require("../assets/images/ferns.jpg"), require("../assets/images/desert.jpg")]} contents={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]} links={["/quiz", "/practice", "/qa"]} titles={["Quiz", "Practice", "Q&A"]} linkTitles={["Start", "Learn", "Learn More"]}/>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}