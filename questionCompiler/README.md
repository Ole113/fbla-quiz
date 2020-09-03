# Question Compiler

The Question Compiler is a way for the user to input their own custom questions into the FBLA Quiz application.
The user needs to specify a config file.  In this directory there is an example config file that compiles the default questions, the user can choose to specify your own as you are prompted in the terminal to input a config file.
The config file requires a database config, the questions, the question options, and the question type(multiple answers or true/false).
## Prerequisites
1. Install MySQL from https://dev.mysql.com/downloads/installer/ (MySQL Installer requires Microsoft .NET Framework 4.5.2 or later). [Full detailed MySQL installation tutorial](https://www.liquidweb.com/kb/install-mysql-windows/)<br /> 
2. Install MySQL Workbench https://dev.mysql.com/downloads/workbench/ and connect to localhost connection(make sure to remember the password you choose for the database): [Tutorial](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html)
3. In the [Query Panel](https://dev.mysql.com/doc/workbench/en/wb-sql-editor-query-panel.html) of MySQL workbench create a new database `create database questions`and click on the yellow lightning bolt at the top of the query panel to run the query and enter that database by querying `use questions`.
4. Copy and paste the [Question Table](../database/questionSchema.sql) into the query panel and run the query.
5. The database has now been successfully created along with the database table!

## Making the Config File
The config file is where the user details their database connection, the questions, and answers they want to be queried into their specified database. 

First make a new file(or modify default.json), this will be your config file.  Secondly add the MySQL database configuration. 
```json
{
	"host": "The host",
	"user": "The SQl user",
	"password": "The password the user set for their database",
	"database": "The name of the database you want to query to"
}
```

Example config.json
```json
{
	"host": "localhost",
	"user": "root",
	"password": "password123",
	"database": "questions"
}
```

## Adding Questions to the Config File
Adding questions to the config file goes right below the database config.

**Questions have 2 options of syntax:**
 1. If the question is phrased to have multiple solutions(that aren't true or false) `["Question title", "Question type", ["Option One", "Option Two", "Option Three", "Option Four"] ]`
 2. If the question is phrased to have only 1 answer(true or false) `["Question Title", "tf", "Question answer(either true or false)"]`

 

**Question type can be 1 of 2 values:**
 1. "multi", which can be rendered as any type of question except for a True/False question.
  2. "tf", which is a True/False question.

**All values need to be strings.**
```json
{
	"host": "localhost",
	"user": "root",
	"password": "password123",
	"database": "questions",
	"questions": [
		["Question title", "multi", ["Option One", "Option Two", "Option Three", "Option Four"]],
		["A True/False question", "tf", "The answer to the true false question"]
	]
}
```

