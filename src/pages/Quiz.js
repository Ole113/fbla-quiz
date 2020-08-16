import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quiz from "../components/Quiz.js";

export default function QuizPage() {
  return (
    <div className="Quiz">
      <Navbar active = "quiz" links = {["/", "/quiz", "/practice", "/qa"]} image = {require("../assets/images/fblaFlag.png")}/>
      <Quiz />
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}