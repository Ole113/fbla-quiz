import React, { useRef } from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

/**
 * The Nav component is the main title, the button below that and the cards to right of it.
 * Nav is on top of the Gradient background.
 */
export default function Nav(props) {

    //Creates a react ref using useRef
    const ref = useRef(null)
    //Is the method that is called when CTA button is clicked. Scrolls to the top of the ref element.
    const scrollToRef = () => window.scrollTo(0, ref.current.offsetTop)   

    return (
        <div ref = {ref} className="container-fluid card-group">
            <div className="row cta-row">
                <div className="col cta">
                    { /* The main title with the gradient button */}
                    <h1>TAKE THE <br />QUIZ <br />TODAY!</h1>
                    <Link to={props.links[0]}><button className="main-btn">Start</button></Link>
                </div>
                <div className="col col-card">
                    <div className="card nav-card">
                        { /* The cards on the right of the screen that have some additional information and a button that brings you to the points. */}
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Quiz</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Q&amp;A</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                <br />
                                { /* When the button is clicked the method scrollToRef is called. */}
                                <button className="btn btn-primary" onClick = {scrollToRef}>Learn More</button>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                <br />
                                <button className="btn btn-primary" onClick = {scrollToRef}>Learn More</button>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                <br />
                                <button className="btn btn-primary" onClick = {scrollToRef}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}