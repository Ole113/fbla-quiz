import React from "react";

import "../assets/css/Results.css";

export default class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.answers);
        return (
            <div className = "Results">
                <h1>{this.props.answers[0].data.value}</h1>
            </div>
        );
    }
}