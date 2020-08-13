import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

export default function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="row">
                <div className="col logo-image">
                    <Link to={props.links[0]}>
                        <img src={props.image} alt="" />
                        <h1>{props.mainTitle}</h1>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col links">
                    <Link to={props.links[0]}>{props.linkTitles[0]}</Link>
                    <Link to={props.links[1]}>{props.linkTitles[1]}</Link>
                    <Link to={props.links[2]}>{props.linkTitles[2]}</Link>
                    <Link to={props.links[3]}>{props.linkTitles[3]}</Link>
                </div>
            </div>
            <div className="footer-copyright">
                {props.copyright}
                {/*darker section with just the copyright on the left side*/}
            </div>
        </footer>
    );
}
