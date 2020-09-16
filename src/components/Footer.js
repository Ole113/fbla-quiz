import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

/**
 * The Footer that's used on every page.
 * @param {Any} props The properties passed in by the parent class
 */
export default function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="row">
                <div className="col logo-image">
                   { /* Main title with logo both of which are links to the homepage */ }
                    <Link to={props.links[0]}>
                        <img src={props.image} alt="" />
                        <h1>{props.mainTitle}</h1>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col links">
                    { /* Links that lead to corresponding pages */ }
                    <Link to={props.links[0]}>{props.linkTitles[0]}</Link>
                    <Link to={props.links[1]}>{props.linkTitles[1]}</Link>
                    <Link to={props.links[2]}>{props.linkTitles[2]}</Link>
                </div>
            </div>
            <div className="footer-copyright">
                { /* Darker section at the end of the copyright */ }
                {props.copyright}
            </div>
        </footer>
    );
}
