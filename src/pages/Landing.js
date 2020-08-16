import "bootstrap/dist/css/bootstrap.css";
import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Parallax from "../components/Parallax.js";
import Cards from "../components/Cards.js";
import Nav from "../components/Nav.js";
import Points from "../components/Points.js";

export default function Landing() {
  return (
    <div className="Landing">
      <Navbar active = "landing" links = {["/", "/quiz", "/practice", "/qa"]} image = {require("../assets/images/fblaFlag.png")}/>
      <Parallax />
      <Nav links = {["/quiz", "#learnMore"]}/>
      <Points contents = {["Customizable reports allows users to analyze information.", "More than 50 questions to study from.", "An intelligent and interactive Q&A section."]} icons = {[require("../assets/images/analytics.svg"), require("../assets/images/questions.svg"), require("../assets/images/forum.svg")]}/>
      <hr style = {{width: "60%", paddingBottom: "100px"}}/>
      <Cards images={[require("../assets/images/mountains.jpg"), require("../assets/images/ferns.jpg"), require("../assets/images/desert.jpg")]} contents={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]} links={["/quiz", "/practice", "/qa"]} titles={["Quiz", "Practice", "Q&A"]} linkTitles={["Start", "Learn", "Learn More"]}/>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}