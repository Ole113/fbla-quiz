import React from "react";
import "../assets/css/Card.css";
import Card from "./Card.js";

export default function Cards(props) {
    return (
        <div className="row card-group">
            <div className="col-lg-4">
                <Card links = {props.links[0]} image = {props.images[0]} title = {props.titles[0]} contents = {props.contents[0]} linkTitle = {props.linkTitles[0]}/>
            </div>
            <div className="col-lg-4">
                <Card links = {props.links[1]} image = {props.images[1]} title = {props.titles[1]} contents = {props.contents[1]} linkTitle = {props.linkTitles[1]}/>
            </div>
            <div className="col-lg-4">
                <Card links = {props.links[2]} image = {props.images[2]} title = {props.titles[2]} contents = {props.contents[2]} linkTitle = {props.linkTitles[2]}/>
            </div>
        </div>
    );
}