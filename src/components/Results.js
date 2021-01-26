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
            changeTime: "Today", //The default time on the dropdown.
            changeGraph: "Average Score (%)", //The default to sort by on the graph for the dropdown.
        }
        this.answers = [
            {
                data: {
                    answer: ["correct answer 1", "correct answer 2", "correct answer 3", "correct answer 4"],
                    id: ["question 1", "question 2", "question 3", "question 4"],
                    type: "matching",
                    value: ["User answer 1", "user answer 2", "user answer 3", "user answer 4"]
                }
            }
        ];
        this.pieRef = React.createRef();
        this.pieRef = React.createRef();
        this.lineRef = React.createRef();
        this.currentDate = "0/0/0000"; //The placeholder value until it is set.
        this.lineChart = ""; //The line chart needs to be a variable so it can be destroyed when the user wants the chart updated.
        this.uniqueKey = 1; //The unique key that will be used when rendering the divs.
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
        this.props.resultsLoaded();
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
                        data: [this._getNumberCorrect(), this.props.answers.length - this._getNumberCorrect()]
                    }
                ],
            },
            options: {

            }
        });

        const chartData = this._getLineChartDataNumbers();

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
        const TODAY = new Date();
        const DAY = String(TODAY.getDate()).padStart(2, "0");
        const MONTH = String(TODAY.getMonth() + 1).padStart(2, "0");
        const YEAR = TODAY.getFullYear();
        this.currentDate = MONTH + "/" + DAY + "/" + YEAR;

        const JSON = `{ "correct": "${this._getNumberCorrect()}", "wrong": "${this.props.answers.length}", "timePerQuestion": "${this._calculateTimePerQuestion()}", "date": "${this.currentDate}", "numberOfQuestions": "${this.props.answers.length}" }`;
        let i = 1;
        while (!(localStorage.getItem(`quiz${i}`) === null)) {
            i++;
        }

        localStorage.setItem(`quiz${i}`, JSON);
    }

    /**
     * Returns the total amount of correct questions.
     */
    _getNumberCorrect() {
        let totalCorrect = 0;

        this.props.answers.forEach(answer => {
            if (answer.data.type === "matching") {
                let matchingNumberCorrect = 0;
                for (let i = 0; i < answer.data.answer.length; i++) {
                    if (answer.data.answer[i] === answer.data.value[i]) {
                        matchingNumberCorrect++;
                    }
                }

                if (matchingNumberCorrect === answer.data.answer.length) totalCorrect++;
            } else if (answer.data.answer === answer.data.value) totalCorrect++;
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
        if (this.props.answers[index].data.type === "matching") {
            let multipleResults = [];
            for (let i = 0; i < this.props.answers[index].data.value.length; i++) {
                if (this.props.answers[index].data.value[i] === this.props.answers[index].data.answer[i]) {
                    multipleResults.push(
                        <div className="result-question-info matching-question" id={`question-number-${i}`}>
                            <h5>{this.props.answers[index].data.id[i]}</h5>
                            <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/checkBox.svg").default} />{this.props.answers[index].data.value[i]}</h6>
                        </div>
                    );
                } else {
                    multipleResults.push(
                        <div className="result-question-info matching-question" id={`question-number-${i}`}>
                            <h5>{this.props.answers[index].data.id[i]}</h5>
                            <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/crossBox.svg").default} />Your answer: {this.props.answers[index].data.value[i]}</h6>
                        </div>
                    );
                }
            }

            //Maps all of the elements in the array and returns them in a div.
            return multipleResults.map(result => {
                if (result.props.className.includes("matching-question")) {
                    return <div key={result.props.id}>
                        {result}
                    </div>
                }
                return <div key={result.props.id}>{result}</div>
            });
        }

        if (this.props.answers[index].data.value === this.props.answers[index].data.answer) {
            return (
                <div className="result-question-info">
                    <h5>{index + 1}. {this.props.answers[index].data.id}</h5>
                    <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/checkBox.svg").default} />{this.props.answers[index].data.answer}</h6>
                </div>
            );
        }

        return (
            <div className="result-question-info">
                <h5>{index + 1}. {this.props.answers[index].data.id}</h5>
                <h6><img alt="quiz answer result" className="result-icon" src={require("../assets/images/crossBox.svg").default} />Your answer: {this.props.answers[index].data.value}</h6>
                <h6>Correct answer: {this.props.answers[index].data.answer}</h6>
            </div>
        );
    }

    /**
     * Renders the results of the questions that the user answered.
     */
    _renderQuestionResults() {
        let resultList = [];

        //Adds to the resultList all the question result html.
        for (let i = 0; i < this.props.answers.length; i++) {
            resultList.push(this._getRenderResult(i));
        }

        //Maps all of the elements in the resultList and returns them in a div.
        return resultList.map(result => {
            this.uniqueKey++;
            if (result.length === undefined) {
                return <div key={this.uniqueKey - 1}>{result}</div>
            }
            return <div key={this.uniqueKey - 1}>
                <h5>Matching Question</h5>
                {result}
            </div>
        });
    }

    /**
     * Calculates the time taken to finish the quiz by subtracting the submit time by the start time.
     */
    _calculateTimeTaken() {
        const startDate = new Date(this.props.startTime.replace(",", ""));
        const submitDate = new Date(this.props.submitTime.replace(",", ""));

        const dateTimeDifference = submitDate.getTime() - startDate.getTime();

        let milliseconds = dateTimeDifference;
        const hours = Math.floor(milliseconds / 1000 / 60 / 60);
        milliseconds -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(milliseconds / 1000 / 60);
        milliseconds -= minutes * 1000 * 60;
        const seconds = Math.floor(milliseconds / 1000);
        milliseconds -= seconds * 1000;

        return [hours, minutes, seconds];
    }

    /**
     * Calculates the time it takes for the user to answer each question by taking an average of the total questions and the total time taken.
     */
    _calculateTimePerQuestion() {
        let timeTaken = this._calculateTimeTaken();
        //If the result is only comprised of seconds then toFixed(2) doesn't work and needs a third digit.
        const result = ((timeTaken[0] * 1000) + timeTaken[1] + (timeTaken[2] * 0.01)) / this.props.answers.length;

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
                                <h1 style={{ display: "inline-block" }}>{((this._getNumberCorrect() / this.props.answers.length) * 100).toFixed(0)}%</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total number correct</h6>
                                <h1 style={{ display: "inline-block" }}>{this._getNumberCorrect()}/{this.props.answers.length}</h1>
                            </div>
                            <div className="col">
                                <h6 className="gray-font">Total time taken</h6>
                                <h1 style={{ display: "inline-block" }}>{`${timeTaken[0] < 10 ? "0" + timeTaken[0] : timeTaken[0]}:${timeTaken[1] < 10 ? "0" + timeTaken[1] : timeTaken[1]}:${timeTaken[2] < 10 ? "0" + timeTaken[2] : timeTaken[2]}`}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
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
                                    <div id="lineChart">
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
                                    <div id="pieChart">
                                        <canvas
                                            ref={this.pieRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: "0px" }} className="card card-results">
                                <div className="card-body">
                                    <div id="quizInfo">
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