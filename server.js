const EXPRESS = require("express");
const CORS = require("cors");
const MYSQL = require("mysql");
const CRON = require("node-cron");

const APP = EXPRESS();

//Schedules a CRON job every 3 hours) to backup the database to the backups folder.
CRON.schedule("* */3 * * *", () => {
    let exec = require("child_process").exec, child;

    child = exec("node src/database/backup/backupScript.js", (error, stdout, stderr) => {
        console.log(stdout + stderr);
        if (error) console.log("Exec Error: " + error);
        console.log("Successfully backed up.");
    });
});

//Sets up the connection info to the MySQL database.
let connection = MYSQL.createConnection({
    host: "localhost",
    user: "root",
    password: "aelb8362580",
    database: "Questions"
});

//Connects to the MySQL database.
connection.connect(err => { if (err) throw err; });

APP.use(CORS());

//Sets the URL directory "/questions" to return the JSON.
APP.get("/questions", (req, res) => {
    connection.query("SELECT * from questions", function (err, result) {
        if (err) throw err;
        else return res.json(result);
    });
});

//Creates the server on port 5000.
APP.listen(5000, () => {
    console.log("Server successfully started.")
});
