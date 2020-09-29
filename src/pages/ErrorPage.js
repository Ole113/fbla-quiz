import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Modal from "../components/Modal.js";
import Error from "../components/Error.js";
import HelpMenu from "../components/HelpMenu.js";

/**
 * Renders the error page with all its corresponding elements.
 */
export default function ErrorPage() {
	return (
		<div className="Error">
			<Navbar color="dark" active="none" links={["/", "/quiz", "/qa"]} image={require("../assets/images/fblaFlag.png")} />
			<Modal title="FBLA Quiz Help Menu"
				body={<HelpMenu />}
			/>
			<Error
				homeHref="/"
				imgHref={require("../assets/images/fblaLogo.png")}
			/>
			<Footer mainTitle="FBLA Quiz" copyright="&copy;2020 FBLA Quiz" links={["/", "/quiz", "/qa"]} image={require("../assets/images/fblaLogoGray.png")} linkTitles={["Home", "Quiz", "Q&A"]} />
		</div>
	);
}