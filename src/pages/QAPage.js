import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Modal from "../components/Modal.js";
import QA from "../components/QA.js";
import HelpMenu from "../components/HelpMenu.js";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function QAPage() {
	return (
		<div className="QA">
			<Navbar
				color="dark"
				active="qa"
				links={["/", "/quiz", "/qa"]}
				image={require("../assets/images/fblaFlag.png").default}
			/>
			<Modal 
				title="FBLA Quiz Help Menu"
				body={<HelpMenu />}
			/>
			<QA />
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