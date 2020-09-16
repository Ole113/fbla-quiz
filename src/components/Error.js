
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Error.css";

/**
 * The error page, is used if the page URL was entered incorrect.
 * @param {Any} props The props which are passed in by the Error Page.
 */
export default function Error(props) {
	return (
		<div className="error-container">
			<div className = "message-col">
				<h1>Oh No, Something Went Wrong...</h1>
				<h4>An error occurred, most likely the page address was entered wrong.</h4>
				<br />
				<Link to={props.homeHref}><button className="home-btn">Home</button></Link>
			</div>
			<div className="logo-col">
				<Link to={props.homeHref}>
					<img src={props.imgHref} alt="FBLA Logo" />
				</Link>
			</div>
		</div>
	);
}