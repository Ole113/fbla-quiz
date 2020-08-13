import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Error() {
  return (
    <div className="Error">
      <Navbar active = "none" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaFlag.png")} />
      <h1 style = {{paddingTop: "200px"}}>Something went wrong...</h1>
      <Footer mainTitle = "FBLA Quiz" copyright = "&copy;2020 FBLA Quiz" links={["/", "/quiz", "/practice", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles = {["Home", "Quiz", "Practice", "Q&A"]}/>
    </div>
  );
}