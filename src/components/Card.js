import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.contents}</p>
                <Link className="btn btn-primary" to={props.links}>{props.linkTitle}</Link>
            </div>
        </div>
    );
}