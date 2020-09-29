import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quiz from "../components/Quiz.js";
import Modal from "../components/Modal.js";
import HelpMenu from "../components/HelpMenu.js";

/**
 * Renders the quiz page with all its corresponding elements.
 * @param {*} props The properties passed down by the parent class.
 */
export default function QuizPage() {

	const API_URL = "http://localhost:5000/questions";

	return (
		<div className="Quiz">
			<Navbar
				color="dark"
				active="quiz"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaFlag.png")}
			/>
			<Modal title="FBLA Quiz Help Menu"
				body={<HelpMenu />}
			/>
			<Quiz apiURL={API_URL} />
			<Footer
				mainTitle="FBLA Quiz"
				copyright="&copy;2020 FBLA Quiz"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaLogoGray.png")}
				linkTitles={["Home", "Quiz", "Q&A"]}
			/>
		</div>
	);
}