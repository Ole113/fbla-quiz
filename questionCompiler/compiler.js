const READLINE = require("readline");
const MYSQL = require("mysql");

let configFileName = "default.json";

const RL = READLINE.createInterface({
	input: process.stdin,
	output: process.stdout
});

RL.question("Example config file name: \"config.json\". \nType \"exit\" to quit. \nLeave the input blank for the default file \"default.json\".\n\n  Config File: ", file => {
	if (file !== "") configFileName = file;
	if (file == "exit") RL.close();
	configFile = require(`./${configFileName}`);

	queryQuestions(configFile)
});

RL.on("close", () => { process.exit(0); });

function queryQuestions(res) {
	let connection = MYSQL.createConnection({
		host: res.host,
		user: res.user,
		password: res.password,
		database: res.database
	});

	connection.connect(err => {
		if (err) {
			console.error("An error occurred, most likely the config file had incorrect values. " + err.stack);
			return;
		}
	});

	for (let i = 0; i < res.questions.length; i++) {
		connection.query(`INSERT INTO questions (content, category, option_one, option_two, option_three, option_four) VALUES ("${res.questions[i][0]}", "${res.questions[i][1]}", "${res.questions[i][2][0]}", "${res.questions[i][2][1]}", "${res.questions[i][2][2]}", "${res.questions[i][2][3]}") `, error => {
			if (error) {
				return connection.rollback(function () {
					throw error;
				});
			}
			console.log("Successfully inserted question.");
		});
	}
}