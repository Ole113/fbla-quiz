const EXPRESS = require("express");
const CORS = require("cors");
const MYSQL = require("mysql");
const CRON = require("node-cron");

const APP = EXPRESS();

CRON.schedule("*/180 * * * *", () => {
    console.log("Running task every 3 hours");
    let exec = require('child_process').exec, child;

    child = exec('node backup/backupScript.js', (error, stdout, stderr) => {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error) console.log("Exec Error: " + error);
    });
});

let connection = MYSQL.createConnection({
    host: "localhost",
    user: "root",
    password: "aelb8362580",
    database: "Questions"
});

connection.connect(err => { if (err) throw err; });

APP.use(CORS());

APP.get("/questions", (req, res) => {
    connection.query("SELECT * from questions", function (err, result) {
        if (err) throw err;
        else return res.json(result);
    });
});

APP.listen(5000, () => {
    console.log("Server successfully started.")
});