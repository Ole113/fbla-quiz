import React from "react";

import "../assets/css/Chatbot.css";

export default class Chatbot extends React.Component {
    constructor(props) {
        super(props);
        this.chatInput = null;
        this.state = { chatMessages: [] };
    }
    componentDidMount() {
        this.chatInput = document.getElementById("chatbot-input");
        this._messageSent();
    }

    _messageSent() {
        this.chatInput.addEventListener("keyup",(event) => {
            if (event.key === "Enter") this._addMessage();
        });
    }

    _addMessage() {
        this.state.chatMessages.push(this.chatInput.value);
        
    }


    _getChatMessages() {
        this.state.chatMessages.map(item => (
            <li key={item}>{item}</li>
        ))
    }

    render() {
        return (
            <div className="chatbot-container">
                <div className = "chatbot-messages">
                    {this._getChatMessages()}
                </div>
                <input id="chatbot-input" type="text" placeholder="What is your question?" />
            </div>
        );
    }
}
