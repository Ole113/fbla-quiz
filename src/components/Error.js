
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Error.css";

/**
 * The error page, is used if the page URL was entered incorrect.
 * @param {Any} props The props which are passed in by the Error Page.
 */
export default function Error(props) {
	return (
		<div className="container error-container">
			<div className="row">
				{ /* The left div that is the error text and the home button. */ }
				<div className="col-md-6 error-text">
					{ /* The span is so the font size can easily be changed in the CSS */ }
					<span>ERROR 404</span>
					<h1>Oh No, Something Went Wrong...</h1>
					<h4>The specified URL could not be found, check that the address is correct.</h4>
					<br />
					<Link to={props.homeHref}><button className="home-btn">Home</button></Link>
				</div>
				{ /* The right column that is that FBLA Logo. */}
				<div className="col-xl-6 d-flex justify-content-center ">
					<Link to={props.homeHref}>
						<img src={props.imgHref} alt="FBLA Logo" />
					</Link>
				</div>
			</div>
		</div>
	);
}