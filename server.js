const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aelb8362580",
    database: "Questions"
});

connection.connect(err => { if(err) throw err; });

app.use(cors());

app.get("/questions", (req, res) => {
    connection.query("SELECT * from questions",function (err, result) {
        if (err) throw err;
        else return res.json(result);
    });
});

app.listen(5000, () => {
    console.log("Server successfully started.")
});