import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Parallax from "./components/Parallax.js";
import Cards from "./components/Cards.js";

function App() {
  return (
    <div className="App">
      <Navbar image = {require("./assets/images/fblaFlag.png")}/>
      <Parallax image={require("./assets/images/archs.jpg")} />
      <Cards images={[require("./assets/images/mountains.jpg"), require("./assets/images/ferns.jpg"), require("./assets/images/desert.jpg")]} contents={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "content 2", "content 3"]} links={["quiz.html", "practice.html", "qa.html"]} titles={["Quiz", "Practice", "Q&A"]} linkTitles={["Start", "Learn", "Learn More"]}/>
      <Footer image={require("./assets/images/fblaLogoGray.png")}/>
    </div>
  );
}

export default App;