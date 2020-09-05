import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Modal from "../components/Modal.js";

/**
 * Renders the error page with all its corresponding elements.
 */
export default function Error() {
  return (
    <div className="Error">
      <Navbar color = "dark" active = "none" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaFlag.png")} />
      <Modal />
      <h1 style = {{paddingTop: "200px"}}>Something went wrong...</h1>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}