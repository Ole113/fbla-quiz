import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function QA() {
  return (
    <div className="QA">
      <Navbar active = "qa" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaFlag.png")} />
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}