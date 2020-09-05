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
      <Modal body = "Modal content" title = "Modal title"/>
      <Quiz />
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}