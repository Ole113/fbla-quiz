import React from "react";

import "../assets/css/Chatbot.css";

/**
 * Sets the look and content of the messages the user and server sends.
 * Sets the styling and look of the message container.
 */
export default class Chatbot extends React.Component {
    /**
     * The constructor for the Chatbot class.
     * @param {Any} props 
     */
    constructor(props) {
        super(props);
        this.chatInput = null;
        this.state = { chatMessages: [] };
    }

    /**
     * Checks if the component has mounted. If so the chatInput is initialized, the initial chat bot message is sent and the keyup event listener is added to check for enter key presses.
     */
    componentDidMount() {
        this.chatInput = document.getElementById("chatbot-input");
        //Sends the initial hello message.
        this._serverSendMessage();
        this._checkMessageSent();
    }

    /**
     * Checks if the user has clicked the "Enter" key.
     * If the input is not empty the _addMessage(type, message) is called.
     * After the user has input something the message contents are checked for keywords in _serverSendMessage().
     */
    _checkMessageSent() {
        this.chatInput.addEventListener("keyup", (event) => {
            if (this.chatInput.value !== "" && event.key === "Enter") this._addMessage("client");
            this._serverSendMessage();
        });
    }

    /**
     * Adds a specified message into the state variable chatMessages.
     * @param {String} type If the message was sent by the server or the client.
     * @param {String} message The message that was sent.
     */
    _addMessage(type, message) {

        /*
        When the questions are rendered if the bot or if the user has sent the messages needs to be known.
        After that is known the message and message type(client or server) is pushed to the state and the state is updated to force a refresh.
        */
        this.state.chatMessages.push({ message: type === "client" ? this.chatInput.value : message, type: type });
        this.setState({ chatMessages: this.state.chatMessages });
        //When the user presses enter the default behavior is for the text to still be in the input field, this clears the input field.
        this.chatInput.value = "";
    }

    /**
     * Renders all the chat messages in divs with corresponding classNames depending on if the server sent the message or the client.
     * The classnames styles the messages appropriately in Chatbot.css.
     */
    _getChatMessages() {
        //Needs to use Object.keys because it's mapping an object inside an array.
        return Object.keys(this.state.chatMessages).map(key => {
            if (this.state.chatMessages[key].type === "server") {
                return <div key={key} className="server-message">
                    <p>{this.state.chatMessages[key].message}</p>
                </div>
            } else if (this.state.chatMessages[key].type === "client") {
                return <div key={key} className="client-message">
                    <p>{this.state.chatMessages[key].message}</p>
                </div>
            } else console.error("The type passed into _addMessage was incorrect. Needs to be either client or server.");
        });
    }

    /**
     * Handles when the bot sends a message back to the user.
     * Uses preset responses that trigger when the user inputs a keyword.
     */
    _serverSendMessage() {
        //If nothing has been sent in the chat messages then chatMessages will be undefine which will throw an error.
        const newestMessage = this.state.chatMessages.length > 0 ? this.state.chatMessages[this.state.chatMessages.length - 1].message : "";
        if (this.state.chatMessages.length === 0) {
            this._addMessage("server", "Hello, what can I help you with today?");
        }
        else if (newestMessage.includes("hello")) {
            //Makes it so the response is not instant and seems more human but not so slow the user thinks the application is slow.
            window.setTimeout(() => this._addMessage("server", "Hi!"), 250)
        }
    }

    /**
     * Renders the messages, the input box, and the message containers.
     */
    render() {
        return (
            <div className="chatbot-container">
                <div className="chatbot-messages">
                    {this._getChatMessages()}
                </div>
                <input id="chatbot-input" type="text" placeholder="What is your question?" />
                <input id = "chatbot-submit"/>
            </div>
        );
    }
}
