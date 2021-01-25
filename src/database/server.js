const EXPRESS = require("express");
const CORS = require("cors");
const MYSQL = require("mysql");
const CRON = require("node-cron");

const APP = EXPRESS();
const CONFIG = require("./questionCompiler/config.json");

//Schedules a CRON job every 3 hours to backup the database to the backups folder.
CRON.schedule("* * * * *", () => {
    let exec = require("child_process").exec, child;

    child = exec("node backup/backupScript.js", (error, stdout, stderr) => {
        console.log(stdout + stderr);
        if (error) console.error("Exec Error: " + error);
        console.log("Successfully backed up.");
    });
});

//Sets up the connection info to the MySQL database.
const CONNECTION = MYSQL.createConnection({
    host: CONFIG.host,
    user: CONFIG.user,
    password: CONFIG.password,
    database: CONFIG.database
});

//Connects to the MySQL database.
CONNECTION.connect(err => { if (err) throw err; });

APP.use(CORS());

//Sets the URL directory "/questions" to return the JSON.
APP.get("/questions", (req, res) => {
    CONNECTION.query("SELECT * from questions", function (err, result) {
        if (err) throw err;
        else return res.json(result);
    });
});

//Creates the server on port 5000.
APP.listen(5000, () => {
    console.log("Server successfully started on port 5000.")
});
