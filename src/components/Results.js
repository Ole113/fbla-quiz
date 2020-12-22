import React from "react";

import "../assets/css/Results.css";

export default class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Results">
                <h1>{this.props.answers[0].data.value}</h1>
                <h1>{this.props.answers[1].data.value}</h1>
                <h1>{this.props.answers[2].data.value}</h1>
                <h1>{this.props.answers[3].data.value}</h1>
                <h1>{this.props.answers[4].data.value}</h1>
            </div>
        );
    }
}