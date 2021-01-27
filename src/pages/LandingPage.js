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
				image={require("../assets/images/fblaFlag.png").default}
			/>
			<Modal title="FBLA Quiz Help Menu"
				body={ <HelpMenu /> }
			/>
			<Gradient />
			<Nav 
				headerOne = "FBLA Quiz is the streamlined, simple, and effective method to studying about FBLA.  With the option to add custom questions, along with the types of questions, and number of questions there's limitless options to help you study and succeed!"
				bodyOne = "The Quiz Page allows you to study even easier by letting you study questions how you want by choosing the types of questions and number of questions you want! The advantages to FBLA Quiz doesn't stop there; Once the quiz is submitted FBLA Quiz has a detailed output report containing right/wrong questions! Everything, including adding/removing questions, output report, and navigating pages is done dynamically, meaning that FBLA Quiz doesn't have to update on every change. This greatly increases loading times and further streamlines your experience!"
				headerTwo = "The FBLA Q&amp;A page answers a variety of questions that involves FBLA Quiz by using an intelligent chatbot! Everything from how to take the quiz, how to run a custom version of FBLA Quiz, or how to use custom questions is all answered by FBLA quiz!"
				bodyTwo = "FBLA Quizzes Q&amp;A page uses keywords that are entered by the user to determine what the response should be. For example if the users input includes the keyword 'help' then a tailored response message will be displayed. The help messages include support for how to make a custom instance of the website including custom questions. If there wasn't a keyword picked up then a message will be output saying that there were no matching keywords found. The Q&amp;A page also includes a short FAQ section where basic questions are answered!"
				links={["/quiz"]} 
			/>
			<Points
				contents={["Customizable reports allows users to analyze information.", "More than 50 questions to study from.", "An intelligent and interactive Q&A section."]}
				icons={[require("../assets/images/analytics.svg").default, require("../assets/images/questions.svg").default, require("../assets/images/forum.svg").default]}
			/>
			<hr style={{ width: "60%", paddingBottom: "100px" }} />
			<Cards images={[require("../assets/images/quizImageCopy.jpg").default, require("../assets/images/fblaStage.jpg").default]}
				contents={[
					"The FBLA Quiz Page allows users to take a quiz with questions from the quiz database. The questions pertain to FBLA material. On the left side of the quiz page is the quiz options. These allow the user to change the types of question and number of questions being tested on.  There are 50+ questions in the database and more can be added using custom quiz questions. See the help menu to learn more.  On the right side of the quiz page there are the quiz questions. The default values is question type Random and 5 quiz questions. Questions are added/removed dynamically along with the result of the quiz using React.  The output report of the quiz contains information such as right/wrong questions, previous test results, and more!",
					"The FBLA Q&A page is the questions and answer page of the FBLA Quiz website. While the website does have a help menu it cannot include all of the information. The Q&A page includes the rest of the information by allowing the user to input their question and the chatbot will decide the choice based on what the user has answered. The page also includes a short FAQ that answers commonly asked questions about FBLA Quiz. The chatbot gives information on topics such as custom questions, using a custom version of the website, and much more! To use the chatbot click on the gray bar with the text 'What can I help you with?' and either press enter or click the button on the right side of the gray bar to send the message!"
				]}
				links={["/quiz", "/qa"]}
				titles={["Quiz", "Q&A"]}
				linkTitles={["Start", "Learn More"]}
			/>
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