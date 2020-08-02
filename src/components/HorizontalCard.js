import React from "react";
import "../assets/css/HorizontalCard.css";

export default function HorizontalCard(props) {

    let className = "card mb-3";
    if (props.direction === "left") className += " horizontal-left";
    else if (props.direction === "right") className += " horizontal-right";
    else throw new Error("The HorizontalCard direction prop was entered wrong.");

    return (
        <div className={className}>
            <div className="row no-gutters">
                <div className="col">
                    <img src={props.image} className="card-img" alt="" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}