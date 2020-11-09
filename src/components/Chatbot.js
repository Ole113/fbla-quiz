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
        this.sendButton = null;
        this.chatbotContainer = null;
        this.state = { chatMessages: [] };
    }

    /**
     * Checks if the component has mounted. If so the chatInput is initialized, the initial chat bot message is sent and the keyup event listener is added to check for enter key presses.
     */
    componentDidMount() {
        this.chatInput = document.getElementById("chatbot-input");
        this.sendButton = document.getElementById("chatbot-submit");
        this.chatbotContainer = document.getElementsByClassName("chatbot-container")[0];
        //Sends the initial hello message.
        this._serverSendMessage();
        this._checkMessageSent();
    }

    /**
     * Checks if the user has clicked the "Enter" key or has clicked the send button.
     * If the input is not empty the _addMessage(type, message) is called.
     * After the user has input something the message contents are checked for keywords in _serverSendMessage().
     */
    _checkMessageSent() {
        this.sendButton.addEventListener("click", () => {
            if (this.chatInput.value !== "") {
                this._addMessage("client");
                this._serverSendMessage();
            }
        });

        this.chatInput.addEventListener("keyup", (event) => {
            if (this.chatInput.value !== "" && event.key === "Enter") {
                this._addMessage("client");
                this._serverSendMessage();
                //Makes it so when the user sends a message the chatbot input is always at the bottom of the container.
                this.chatbotContainer.scrollTop = this.chatbotContainer.scrollHeight;
            }
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
                    <img src={require("../assets/images/userIcon.svg")} alt="FBLA Logo" />
                    <h6>Help Bot</h6>
                    <br />
                    <p>{this.state.chatMessages[key].message}</p>
                </div>
            } else if (this.state.chatMessages[key].type === "client") {
                return <div key={key} className="client-message">
                    <h6>You</h6>
                    <br />
                    <p>{this.state.chatMessages[key].message}</p>
                </div>
            } else {
                //React throws a warning if a return isn't returned from a arrow function.
                console.error("The type passed into _addMessage was incorrect. Needs to be either client or server.");
                return "An error has occurred."
            }
        });
    }

    /**
     * Handles when the bot sends a message back to the user.
     * Uses preset responses that trigger when the user inputs a keyword.
     */
    _serverSendMessage() {
        //If nothing has been sent in the chat messages then chatMessages will be undefine which will throw an error.
        const NEWEST_MESSAGE = this.state.chatMessages.length > 0 ? this.state.chatMessages[this.state.chatMessages.length - 1].message.toLowerCase() : "";
        const MESSAGE_DELAY = 300;
        if (this.state.chatMessages.length === 0) {
            this._addMessage("server", "Hello, welcome to FBLA Chat Bot Help! You can ask me anything about FBLA Quiz.");
            this._addMessage("server", "For example if you don't know how to use the Quiz you can ask me \"How do I use the Quiz?\"");
            this._addMessage("server", "What can I help you with today?");
        } else if (NEWEST_MESSAGE.includes("hello") || NEWEST_MESSAGE.includes("hi")) {
            //Makes it so the response is not instant and seems more human but not so slow the user thinks the application is slow.
            window.setTimeout(() => this._addMessage("server", "Hi!"), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("thank")) {
            window.setTimeout(() => this._addMessage("server", "You're welcome! Have good day and thank you for using FBLA Quiz."), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("goodbye") || NEWEST_MESSAGE.includes("bye")) {
            window.setTimeout(() => this._addMessage("server", "Goodbye, I hope I helped you!"), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("help")) {
            window.setTimeout(() => this._addMessage("server", "The FBLA Chat Bot uses keywords to determine what you need help with. For example if you need help with the quiz section and type in \"How do I use the quiz page?\" the Chat Bot will pick up that you said \"quiz\" and return the appropriate message. To get a full list of the keywords Chat Bot uses type \"keyword\"."), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("keyword")) {
            //Update this once all the keywords are set.
            window.setTimeout(() => this._addMessage("server", "The keywords that the FBLA Chat Bot looks for are: hello, hi, thank, goodbye, bye, help, keyword, and quiz."), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("quiz")) {
            window.setTimeout(() => this._addMessage("server", "FBLA Quiz's Quiz section is where you can put your skills to practice and test your knowledge. The Quiz Section is split into 2 parts, the options part and the quiz part."), MESSAGE_DELAY);
            window.setTimeout(() => this._addMessage("server", "The quiz options section on the left side of the page is where you can determine the types of questions, and number of questions to be tested on. The amount of questions cannot be changed lower than 1.  There are five types of questions: random, fill in the blank, multiple choice, true/false, and matching."), MESSAGE_DELAY);
            window.setTimeout(() => this._addMessage("server", "On the right side of the Quiz page is the quiz section where the quiz questions are present.  There will be at least 1 question.  At the bottom of the questions is the submit button. Clicking the submit button will grade the quiz and display the results."), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("custom") || NEWEST_MESSAGE.includes("database")) {
            window.setTimeout(() => this._addMessage("server", ""), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("github") || NEWEST_MESSAGE.includes("source") || NEWEST_MESSAGE.includes("code") || NEWEST_MESSAGE.includes("download")) {
            window.setTimeout(() => this._addMessage("server", "FLBA Quiz is open source, meaning you can download FBLA Quiz and can modify it any way you want. There's documentation on how to use custom questions and run the website on your own. https://github.com/Ole113/fbla-quiz-2021"), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("question") || NEWEST_MESSAGE.includes("database") || NEWEST_MESSAGE.includes("custom")) {
            window.setTimeout(() => this._addMessage("server", "FBLA Quiz has custom quiz question integrations. To get started download the source code from the GitHub repository, https://github.com/Ole113/fbla-quiz-2021."), MESSAGE_DELAY);
            window.setTimeout(() => this._addMessage("server", "Once the source code has been downloaded go to the Question Compiler and follow the instructions in the README.md file, https://github.com/Ole113/fbla-quiz-2021/tree/master/src/database/questionCompiler."), MESSAGE_DELAY);
            window.setTimeout(() => this._addMessage("server", "Following these instructions allows for custom quiz questions to be answered along with the ability to modify the website."), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("how are you")) {
            window.setTimeout(() => this._addMessage("server", "I am good thank you for asking!"), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("are you")) {
            window.setTimeout(() => this._addMessage("server", "I am a chatbot created to help you understand how FBLA Quiz works! To get started use the \"help\" command!"), MESSAGE_DELAY);
        } else if (NEWEST_MESSAGE.includes("age") || NEWEST_MESSAGE.includes("name")) {
            window.setTimeout(() => this._addMessage("server", "I don't have a name or age but you can call me Chatbot help!"), MESSAGE_DELAY);
            //         } else if(NEWEST_MESSAGE.includes("")) {
            //             window.setTimeout(() => this._addMessage("server", ""), MESSAGE_DELAY);
            //         } else if(NEWEST_MESSAGE.includes("")) {
            //             window.setTimeout(() => this._addMessage("server", ""), MESSAGE_DELAY);
        }
        //If no keywords are picked up then an error message is sent.
        else window.setTimeout(() => this._addMessage("server", "I'm sorry, I don't understand what you're asking me. Make sure your spelling is correct, if you still need help type \"help\" into the chat."), MESSAGE_DELAY);
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
                <input id="chatbot-input" type="text" placeholder="What do you need help with?" />
                <input id="chatbot-submit" />
            </div>
        );
    }
}
