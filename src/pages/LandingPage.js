import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Gradient from "../components/Gradient.js";
import Cards from "../components/Cards.js";
import Nav from "../components/Nav.js";
import Points from "../components/Points.js";
import Modal from "../components/Modal.js";
import HelpMenu from "../components/HelpMenu.js";

/**
 * Renders the landing page with all its corresponding elements.
 */
export default function LandingPage() {
	return (
		<div className="Landing">
			<Navbar
				color="white" active="landing"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaFlag.png")}
			/>
			<Modal title="FBLA Quiz Help Menu"
				body={ <HelpMenu /> }
			/>
			<Gradient />
			<Nav 
				headerOne = "FBLA Quiz is the streamlined, simple, and effective method to studying about FBLA.  With the option to add custom questions, along with the types of questions, and number of questions there's limitless options to help you study and succeed!"
				bodyOne = "The Quiz Page allows you to study even easier by letting you study questions how you want by choosing the types of questions and number of questions you want! The advantages to FBLA Quiz doesn't stop there; Once the quiz is submitted FBLA Quiz has a detailed output report containing right/wrong questions! Everything, including adding/removing questions, output report, and navigating pages is done dynamically, meaning that FBLA Quiz doesn't have to update on every change. This greatly increases loading times and further streamlines your experience!"
				headerTwo = "Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh."
				bodyTwo = "Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh."
				links={["/quiz"]} 
			/>
			<Points
				contents={["Customizable reports allows users to analyze information.", "More than 50 questions to study from.", "An intelligent and interactive Q&A section."]}
				icons={[require("../assets/images/analytics.svg"), require("../assets/images/questions.svg"), require("../assets/images/forum.svg")]}
			/>
			<hr style={{ width: "60%", paddingBottom: "100px" }} />
			<Cards images={[require("../assets/images/quizImageCopy.jpg"), require("../assets/images/fblaStage.jpg")]}
				contents={[
					"The FBLA Quiz Page allows users to take a quiz with questions from the quiz database. The questions pertain to FBLA material. On the left side of the quiz page is the quiz options. These allow the user to change the types of question and number of questions being tested on.  There are 50+ questions in the database and more can be added using custom quiz questions. See the help menu to learn more.  On the right side of the quiz page there are the quiz questions. The default values is question type Random and 5 quiz questions. Questions are added/removed dynamically along with the result of the quiz using React.  The output report of the quiz contains information such as right/wrong questions, previous test results, and more!",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				]}
				links={["/quiz", "/qa"]}
				titles={["Quiz", "Q&A"]}
				linkTitles={["Start", "Learn More"]}
			/>
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