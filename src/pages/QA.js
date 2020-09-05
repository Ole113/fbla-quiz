import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Modal from "../components/Modal.js";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function QA() {
  return (
    <div className="QA">
      <Navbar color = "dark" active = "qa" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaFlag.png")} />
      <Modal body = "Modal content" title = "Modal title"/>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}