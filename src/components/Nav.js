import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.goToCards = React.createRef()
    }

    handleOnClick = (event) => {
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row cta-row">
                    <div className="col cta">
                        <h1>TAKE THE <br />QUIZ <br />TODAY!</h1>
                        <Link to={this.props.links[0]}><button className="main-btn">Start</button></Link>
                    </div>
                    <div className="col col-card">
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
                                    <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                    <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                    <br />
                                    <Link className="btn btn-primary" to={this.props.links[1]}>Start Today</Link>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                    <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                    <br />
                                    <Link className="btn btn-primary" to={this.props.links[1]}>Start Today</Link>                            </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <h5>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</h5>
                                    <p>Lorem ipsum dolor sit amet, hendrerit tellus ligula tortor pellentesque eget ante. Justo praesent, amet ullamcorper proin, viverra sem, quidem et a. Est fermentum tristique nec diam. Morbi etiam wisi eu aliquet laoreet, fames eros nibh.</p>
                                    <br />
                                    <Link className="btn btn-primary" to={this.props.links[1]}>Start Today</Link>                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}