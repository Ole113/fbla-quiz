import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Parallax from "../components/Parallax.js";
import Cards from "../components/Cards.js";
import Nav from "../components/Nav.js";

export default function Landing() {
  return (
    <div className="Landing">
      <Navbar active = "landing" links = {["/", "/quiz", "/practice", "/qa"]} image = {require("../assets/images/fblaFlag.png")}/>
      <Parallax />
      <Nav links = {["/quiz", "#learnMore"]}/>
      <Cards images={[require("../assets/images/mountains.jpg"), require("../assets/images/ferns.jpg"), require("../assets/images/desert.jpg")]} contents={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "content 2", "content 3"]} links={["/quiz", "/practice", "/qa"]} titles={["Quiz", "Practice", "Q&A"]} linkTitles={["Start", "Learn", "Learn More"]}/>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}