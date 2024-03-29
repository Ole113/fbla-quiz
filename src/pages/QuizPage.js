import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Quiz from "../components/Quiz.js";
import Modal from "../components/Modal.js";
import HelpMenu from "../components/HelpMenu.js";

import Results from "../components/Results.js";

/**
 * Renders the quiz page with all its corresponding elements.
 */
export default function QuizPage() {

	const API_URL = "http://localhost:5000/questions";

	return (
		<div className="Quiz">
			<Navbar
				color="dark"
				active="quiz"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaFlag.png").default}
			/>
			<Modal title="FBLA Quiz Help Menu"
				body={<HelpMenu />}
			/>
			<Quiz apiURL={API_URL} />
			{/* <Results
				startTime="7:12:02 PM"
				submitTime="8:15:34 PM"
				totalQuestions={5}
			/> */}
			<Footer
				mainTitle="FBLA Quiz"
				copyright="&copy;2020 FBLA Quiz"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaLogoGray.png").default}
				linkTitles={["Home", "Quiz", "Q&A"]}
			/>
		</div>
	);
}