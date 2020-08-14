import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {

    return (
        <div className="container-fluid">
            <div className="row cta-row">
                <div className="col cta">
                    <h1>TAKE THE <br />QUIZ <br />TODAY!</h1>
                    <Link to ={props.links[0]}><button className="main-btn">Start</button></Link>
                </div>
                <div className="col">
                    <div className="card nav-card">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Quiz</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Practice</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Q&amp;A</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h5>With over 60 quiz questions, an interactive practice section, and more, FBLA Quiz wants to help you succeed!</h5>
                                <p>With customizable quiz options and advanced output reports allowing users to customize and analyze information FBLA Quiz has all the tools that you need to succeed.</p>
                                <br />
                                <Link className = "btn btn-primary" to ={props.links[1]}>Start Today</Link>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                With over 60 quiz questions, an interactive practice section, and more FBLA Quiz wants to help you succeed!
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                With over 60 quiz questions, an interactive practice section, and more FBLA Quiz wants to help you succeed!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}