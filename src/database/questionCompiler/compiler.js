const READLINE = require("readline");
const MYSQL = require("mysql");

const CONFIG_FILE_NAME = "config.json";

const RL = READLINE.createInterface({
	input: process.stdin,
	output: process.stdout
});

RL.question("Example config file name: \"config.json\". \nType \"exit\" to quit. \nLeave the input blank for the default file \"default.json\".\n\n  Config File: ", file => {
	if (file !== "") CONFIG_FILE_NAME = file;
	if (file == "exit") RL.close();
	const CONFIG_FILE = require(`./${CONFIG_FILE_NAME}`);

	queryQuestions(CONFIG_FILE)
});

RL.on("close", () => { process.exit(0); });

function queryQuestions(res) {
	const CONNECTION = MYSQL.createConnection({
		host: res.host,
		user: res.user,
		password: res.password,
		database: res.database
	});

	CONNECTION.connect(err => {
		if (err) {
			console.error("An error occurred, most likely the config file had incorrect values. " + err.stack);
			return;
		}
	});

	for (let i = 0; i < res.questions.length; i++) {
		CONNECTION.query(`INSERT INTO questions (content, category, option_one, option_two, option_three, option_four) VALUES ("${res.questions[i][0]}", "${res.questions[i][1]}", "${res.questions[i][2][0]}", "${res.questions[i][2][1]}", "${res.questions[i][2][2]}", "${res.questions[i][2][3]}") `, error => {
			if (error) {
				return CONNECTION.rollback(function () {
					throw error;
				});
			}
			console.log("Successfully inserted question.");
		});
	}
}
