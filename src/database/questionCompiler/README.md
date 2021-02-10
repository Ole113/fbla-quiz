# Question Compiler

The Question Compiler is a way for the user to input their own custom questions into the FBLA Quiz application.
The user needs to specify a config file.  In this directory there is an example config file that compiles the default questions. The user can choose to specify their own as they are prompted in the terminal to input a config file.
The config file requires a database config, the questions, the question options, and the question type(multiple answers or true/false).
## Prerequisites
1. Install MySQL from https://dev.mysql.com/downloads/installer/ (MySQL Installer requires Microsoft .NET Framework 4.5.2 or later). [Full detailed MySQL installation tutorial](https://www.liquidweb.com/kb/install-mysql-windows/)<br /> 
2. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) and connect to localhost connection(make sure to remember the password you choose for the database): [Tutorial](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html)
3. In the [Query Panel](https://dev.mysql.com/doc/workbench/en/wb-sql-editor-query-panel.html) of MySQL workbench create a new database `CREATE DATABASE questions`and click on the yellow lightning bolt at the top of the query panel to run the query and enter that database by querying `USE questions`.
4. Copy and paste the [Question Table](../database/questionSchema.sql) into the query panel and run the query.
5. Run the query `SHOW TABLES;`. If the questions table has been successfully created it should show in the output.
6. The database has now been successfully created along with the database table!

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

**Questions syntax:**
`["Question title", "Question type", ["Option One", "Option Two", "Option Three", "Option Four"] ]`


**Question type can be 1 of 2 values:**
 1. "multi", which can be rendered as any type of question except for a True/False question.
  1. "tf", which is a True/False question.

**All values need to be strings.**
```json
{
	"host": "localhost",
	"user": "root",
	"password": "password123",
	"database": "questions",
	"questions": [
		["Question title", "multi", ["Option One", "Option Two", "Option Three", "Option Four"]],
		["A True/False question", "tf", "The answer to the true false question", "", "", ""]
	]
}
```
Note: the three blank strings in the True/False questions is required. Only the first string should be filled.

## Running the Compiler
Once the config file has the correct values for the database connection and has at least 1 question you can run the compiler which will populate the database with the questions in the config file.<br />
To run the compiler navigate the the questionCompiler directory and run `node compiler.js`
The console will output
```
Example config file name: "config.json".
Type "exit" to quit.
Leave the input blank for the default file "default.json".

  Config File:

```
The user specifies the config file next to where it says "Config File: ". If the user presses enter without entering anything the default file name will be used which is default.json. To exit the prompt the user types "exit".

Once the user inputs the config file name or uses the default config file name the compiler will output any errors that occurred. If you encounter an error see the Common Errors section below.

If no errors occur every question that was added to the database will output a message: `Successfully inserted question.`

**The users custom questions have been successfully added to their database!**

To exit the application press `CTRL + C` which will exit to a default terminal line.
## Checking The Database
To confirm that the questions were correctly written to the database go to query panel and run the query `SELECT * FROM questions;`. The query results will have the questions that were just added with the compiler.

## Common Errors
`Access denied for user 'root'@'localhost' (using password: YES)`  Most likely the config file has an incorrect value in it.<br />
`MODULE_NOT_FOUND`  Mostly likely the specified config file was not found. The file path could be incorrect or the file could not exist.
