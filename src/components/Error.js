
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Error.css";

export default function Error(props) {
    return (
        <div className="containererror">
          <div className = "row">
            <div className = "col-8">
              <h1>Oh No, Something Went Wrong...</h1>
              <h4>An error occured, most likey the page address was entered wrong.</h4>
             	<br />
              <Link to={props.homeHref}><button className="home-btn">Home</button></Link>
            </div>
            <div className = "col-4">
              <img src = {props.imgHref} alt = "FBLA Logo" />
            </div>
          </div>
        </div>
    );
}
