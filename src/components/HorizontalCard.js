import React from "react";
import "../assets/css/HorizontalCard.css";

export default function HorizontalCard(props) {

    let className = "card horizontal";
    if (props.direction == "left") className += " horizontal-left";
    else if (props.direction == "right") className += " horizontal-right";
    else throw "The HorizontalCard direction prop was entered wrong.";

    return (
        <div className="col s12 m7">
            <div className={className}>
                <div className="card-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.content}</p>
                    </div>
                    <div className="card-action">
                        <a href="quiz.html">{props.link}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}