const readline = require("readline");
const mysql = require("mysql");

const configFile;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What is the config file?", function(file) { 
    configFile = file;
    rl.close(); 
  }); 
});

rl.on("close", function() { process.exit(0); });

const questions = configFile.questions;
const sqlConfig = configFile;

let connection = mysql.createConnection({
  host: sqlConfig.host,
  user: sqlConfig.user,
  password: sqlConfig.password,
  database: sqlConfig.database
});

connection.connect(err => {
  if (err) {
    console.error("An error occured, most likely the config file had incorrect values." + err.stack);
    return;
  }
}).then(queryQuestion(questions));

function queryQuestion(q) {
  for(let i = 0; i < questions.length; i++) {
    connection.query(`INSERT INTO questions (content, type, option_one, option_two, option_three, option_four) VALUES ("${q[i][0]", "${q[i][1]}", "${q[i][2][0]}", "${q[i][2][1]}", "${q[i][2][2]}""${q[i][2][3]}") `,  function (error, results, fields) {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      console.log("QUERIED");
    }
  }
}
