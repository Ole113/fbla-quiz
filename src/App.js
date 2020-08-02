import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Parallax from "./components/Parallax.js";
import HorizontalCard from "./components/HorizontalCard.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax image={require("./assets/images/archs.jpg")} />
      <HorizontalCard image={require("./assets/images/desert.jpg")} content={<div><h1>test</h1><p></p></div>} link="QUIZ" direction="left" />
      <HorizontalCard image={require("./assets/images/ferns.jpg")} content={<div><h1>test</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>} link="QUIZ" direction="right" />
      <HorizontalCard image={require("./assets/images/mountains.jpg")} content={<div><h1>test</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>} link="QUIZ" direction="left" />
      <Footer />
    </div>
  );
}

export default App;