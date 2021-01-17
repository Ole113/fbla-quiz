import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/Results.css";

import Chart from "chart.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Toast } from "../components/Toast.js";

//Configures the toast module.
toast.configure();

/**
 * Renders the results of the quiz.
 */
export default class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changeTime: "Today",
            changeGraph: "Average Score (%)",
        }
        this.answers = [
            {
                data: {
                    answer: "Blue and gold",
                    id: "What are the official colors of FBLA?",
                    type: "multiple",
                    value: "Blue and gold"
                }
            },
            {
                data: {
                    answer: "1940",
                    id: "When was FBLA founded?",
                    type: "multiple",
                    value: "1937"
                }
            },
            {
                data: {
                    answer: "Seven",
                    id: "The FBLA creed contains how many stanzas?",
                    type: "multiple",
                    value: "Nine"
                }
            },
            {
                data: {
                    answer: "Nine",
                    id: "There are how many FBLA goals?",
                    type: "multiple",
                    value: "Five"
                }
            },
            {
                data: {
                    answer: "Three years",
                    id: "Excluding the three division presidents, what is the term of office for National Board of Director members?",
                    type: "multiple",
                    value: "Two years"
                }
            }
        ];
        this.pieRef = React.createRef();
        this.pieRef = React.createRef();
        this.lineRef = React.createRef();
        this.currentDate = "0/0/0000";
        //The line chart needs to be a variable so it can be destroyed when the user wants the chart updated.
        this.lineChart = "";
    }

    /**
     * Renders the pie and line chart and sets the local storage of the new quiz result.
     */
    componentDidMount() {
        //Sets the quiz in the local storage.
        this._setLocalStorage();
        //Renders both of the charts.
        this._renderCharts();
        //Calls to parent which sets parent's answer state variable to blank so if the user clicks on the quiz link it will show a new quiz form and not the previous results page.
        // this.props.resultsLoaded();
    }

    /**
     * Updates the app when either of the input boxes have been changed.
     */
    componentDidUpdate() {
        //If the user changes the time or information they want to chart to show the page needs to update to show the new chart. Could possibly be done with Chart.js built in updating chart.
        this._renderCharts();
    }

    /**
     * Renders the pie and line charts.
     */
    _renderCharts() {
        const pieChartRef = this.pieRef.current.getContext("2d");
        const lineChartRef = this.lineRef.current.getContext("2d");

        new Chart(pieChartRef, {
            type: "pie",
            data: {
                labels: ["Correct", "Incorrect"],
                datasets: [
                    {
                        backgroundColor: ["#0e9d58", "#db4437"],
                        data: [this._getNumberCorrect(), this.answers.length - this._getNumberCorrect()]
                    }
                ],
            },
            options: {

            }
        });

        let chartData = this._getLineChartDataNumbers();

        /**
         * Returns if the line chart will have 1 or 2 lines.
         * 2 lines if the chart is Correct/Incorrect.
         */
        const getLineChartData = () => {
            //Makes it so old chart data won't show. There used to be a bug where data from average score would show when hovering over data points.
            if (this.lineChart !== "") this.lineChart.destroy();

            //Needs to be in a try catch because chartData[0][0].length will throw an error if invalid.
            try {
                //Checks if the user wants to find the Correct/Incorrect.
                if (chartData[0][0].length === 2) {

                    /**
                     * First index of chartData[0] is the number correct, second index is the number incorrect.
                     * If index is 0 then the number correct is added to an array(chartArray) if the index is 1 then all the number of incorrect questions is added to the array.
                     * @param {Number} index The index to loop from.
                     */
                    const getChartInfo = (index) => {
                        let chartArray = [];
                        chartData[0].forEach(array => {
                            chartArray.push(array[index][0]);
                        });
                        return chartArray;
                    }

                    return [
                        {
                            label: "Correct",
                            backgroundColor: "green",
                            borderColor: "green",
                            data: getChartInfo(0),
                            fill: false
                        },
                        {
                            label: "Incorrect",
                            backgroundColor: "red",
                            borderColor: "red",
                            data: getChartInfo(1),
                            fill: false
                        }
                    ];
                }

                return [{
                    label: "Results",
                    data: chartData[0]
                }];
            }
            catch (err) {
                //Catches pretty much the same error as when the Toast is added but this logs it.
                console.error(err)
            }
        }

        //Sets the instance variable lineChart equal to a Chart.
        this.lineChart = new Chart(lineChartRef, {
            type: "line",
            data: {
                labels: chartData[1],
                datasets: getLineChartData()
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 15
                        }
                    }]
                }
            }
        });
    }

    /**
     * Gets the correct data for the line chart.
     */
    _getLineChartDataNumbers() {
        let foundData = [];
        //The charts data is the first index and the labels are the second.
        foundData[0] = [];
        foundData[1] = [];

        let i = 1;

        //When getting an item from localStorage that doesn't exist it will return null, so it loops until every element in localStorage has been accessed.
        while (!(localStorage.getItem(`quiz${i}`) === null)) {
            let foundStorageItem = localStorage.getItem(`quiz${i}`);
            let parsedJSON = JSON.parse(foundStorageItem);

            /**
             * Sets the value of foundData which is all the information that is needed to graph.
             */
            const setData = () => {
                if (this.state.changeGraph === "Average Score (%)") foundData[0].push((parsedJSON.correct / parsedJSON.wrong) * 100);
                else if (this.state.changeGraph === "Correct/Incorrect") foundData[0].push([[parsedJSON.correct], [parsedJSON.wrong - parsedJSON.correct]]);
                else if (this.state.changeGraph === "Time Per Question") foundData[0].push(parsedJSON.timePerQuestion);
                else if (this.state.changeGraph === "Number Of Questions") foundData[0].push(parsedJSON.numberOfQuestions);

                foundData[1].push(parsedJSON.date);
            }

            let splitCurrentDate = this.currentDate.split("/");

            //Determines if the dates are within the chosen time period.
            if (this.state.changeTime === "Today" && parsedJSON.date === this.currentDate) setData();
            else if (this.state.changeTime === "Yesterday" && (splitCurrentDate[0] + "/" + (splitCurrentDate[1] - 1) + "/" + splitCurrentDate[2]) === parsedJSON.date) setData();
            else if (this.state.changeTime === "This Week" && (splitCurrentDate[1] - parsedJSON.date.split("/")[1]) >= 0) setData();
            else if (this.state.changeTime === "This Month" && splitCurrentDate[0] === parsedJSON.date.split("/")[0]) setData();
            else if (this.state.changeTime === "All Time") setData();

            i++;
        }

        //There were no elements in localStorage that were found to work with the conditions.
        if (foundData[0][0] === undefined) {
            Toast("The data couldn't be found for the specified time.");
        }

        return foundData;
    }

    /**
     * Adds the new quiz results to the local storage.
     */
    _setLocalStorage() {
        let today = new Date();
        let day = String(today.getDate()).padStart(2, "0");
        let month = String(today.getMonth() + 1).padStart(2, "0");
        let year = today.getFullYear();
        this.currentDate = month + "/" + day + "/" + year;

        let json = `{ "correct": "${this._getNumberCorrect()}", "wrong": "${this.answers.length}", "timePerQuestion": "${this._calculateTimePerQuestion()}", "date": "${this.currentDate}", "numberOfQuestions": "${this.answers.length}" }`;
        let i = 1;
        while (!(localStorage.getItem(`quiz${i}`) === null)) {
            i++;
        }

        localStorage.setItem(`quiz${i}`, json);
    }

    /**
     * Returns the total amount of correct questions.
     */
    _getNumberCorrect() {
        let totalCorrect = 0;
        this.answers.forEach(answer => {
            if (answer.data.answer === answer.data.value) totalCorrect++;
        });
        return totalCorrect;
    }

    /**
     * Handles the change of time on the line graph.
     * @param {Object} event The event passed into the function by the onChange.
     */
    _handleChangeTime(event) {
        this.setState({ changeTime: event.target.value });
    }

    /**
     * Handles the change of the graphs data.
     * @param {Object} event The event passed into the function by the onChange.
     */
    _handleChangeGraph(event) {
        this.setState({ changeGraph: event.target.value });
    }

    /**
     * Returns the correct response depending on if the question was right or wrong.
     * @param {Number} index The index of the question to load.
     */
    _getRenderResult(index) {
        if (this.answers[index].data.value === this.answers[index].data.answer) {
            return (
                <div className="result-question-info">
                    <h5>{index + 1}. {this.answers[index].data.id}</h5>
                    <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/checkBox.svg").default} />{this.answers[index].data.answer}</h6>
                </div>
            );
        }
        return (
            <div className="result-question-info">
                <h5>{index + 1}. {this.answers[index].data.id}</h5>
                <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/crossBox.svg").default} />Your answer: {this.answers[index].data.value}</h6>
                <h6>Correct answer: {this.answers[index].data.answer}</h6>
            </div>
        );
    }

    /**
     * Renders the results of the questions that the user answered.
     */
    _renderQuestionResults() {
        return (
            <div>
                {this._getRenderResult(0)}
                {this._getRenderResult(1)}
                {this._getRenderResult(2)}
                {this._getRenderResult(3)}
                {this._getRenderResult(4)}
            </div>
        );
    }

    /**
     * 
     */
    _calculateTimeTaken() {
        const startTime = this.props.startTime.split(" ")[0];
        const submitTime = this.props.submitTime.split(" ")[0];

        let hours = Number(submitTime.split(":")[0]) - Number(startTime.split(":")[0]);
        let minutes = Number(submitTime.split(" ")[0].split(":")[1]) - Number(startTime.split(" ")[0].split(":")[1]);
        let seconds = Number(submitTime.split(" ")[0].split(":")[2]) - Number(startTime.split(" ")[0].split(":")[2]);

        return [hours, minutes, seconds];
    }

    /**
     * Calculates the time it takes for the user to answer each question by taking an average of the total questions and the total time taken.
     */
    _calculateTimePerQuestion() {
        let timeTaken = this._calculateTimeTaken();
        //If the result is only comprised of seconds then toFixed(2) doesn't work and needs a third digit.
        const result = ((timeTaken[0] * 1000) + timeTaken[1] + (timeTaken[2] * 0.01)) / this.answers.length
        return result > 0.01 ? result.toFixed(2) : result.toFixed(3);
    }

    /**
     * Renders the quiz output report.
     */
    render() {
        const timeTaken = this._calculateTimeTaken();
        return (
            <div className="Results">
                <div className="card card-results">
                    <div className="card-body">
                        <h5 className="card-title">Quiz Results<button className="print-button" onClick={function print() { window.print() }}>Print</button></h5>
                        <hr className="hr-result-title" />
                        <div className="row">
                            <div className="col">
                                <h6 className="gray-font">Your score is</h6>
                                <h1 style={{ display: "inline-block" }}>{((this._getNumberCorrect() / this.answers.length) * 100).toFixed(0)}%</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total number correct</h6>
                                <h1 style={{ display: "inline-block" }}>{this._getNumberCorrect()}/{this.answers.length}</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total time taken</h6>
                                <h1 style={{ display: "inline-block" }}>{`${timeTaken[0] < 10 ? "0" + timeTaken[0] : timeTaken[0]}:${timeTaken[1] < 10 ? "0" + timeTaken[1] : timeTaken[1]}:${timeTaken[2] < 10 ? "0" + timeTaken[2] : timeTaken[2]}`}</h1>
                            </div>
                        </div>
                    </div>
                    <div className = "card-footer">
                        <Link to="/quiz"><button className="try-again-button">Retry</button></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div style={{ paddingRight: "0px" }} className="col-lg-5">
                            <div style={{ marginRight: "0px" }} className="card card-results">
                                <div className="card-body">
                                    {this._renderQuestionResults()}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div style={{ paddingLeft: "0px" }} className="card card-results">
                                <div className="card-body">
                                    <div id="line-chart">
                                        <select className="form-control" onChange={this._handleChangeTime.bind(this)} id="changeTime">
                                            <option value="Today">Today</option>
                                            <option value="Yesterday">Yesterday</option>
                                            <option value="This Week">This Week</option>
                                            <option value="This Month">This Month</option>
                                            <option value="All Time">All Time</option>
                                        </select>
                                        <select className="form-control" onChange={this._handleChangeGraph.bind(this)} id="changeGraph">
                                            <option>Average Score (%)</option>
                                            <option>Correct/Incorrect</option>
                                            <option>Time Per Question</option>
                                            <option>Number Of Questions</option>
                                        </select>
                                        <canvas
                                            ref={this.lineRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: "0px" }} className="card card-results">
                                <div className="card-body">
                                    <div id="pie-chart">
                                        <canvas
                                            ref={this.pieRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: "0px" }} className="card card-results">
                                <div className="card-body">
                                    <div id="quiz-info">
                                        <h5>Quiz start time</h5>
                                        <p>{this.props.startTime}</p>
                                        <br />
                                        <h5>Quiz submit time</h5>
                                        <p>{this.props.submitTime}</p>
                                        <br />
                                        <h5>Time per question</h5>
                                        <p>{this._calculateTimePerQuestion()} seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}