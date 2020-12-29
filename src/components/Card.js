import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Card.css";

/**
 * The singular card element with a image header, a title, body text, and a button.
 * @param {Any} props The properties passed in by the parent class
 */
export default function Card(props) {
    return (
        <div className="card card-class">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.contents}</p>
                <Link className="btn btn-primary" to={props.links}>{props.linkTitle}</Link>
            </div>
        </div>
    );
}