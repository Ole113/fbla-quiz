const MYSQLDUMP = require("mysqldump");

const DATE = new Date();

//Uses the NPM module mysqldump to connect to the database and backup the information into the backups folder.
MYSQLDUMP({
    connection: {
        host: "localhost",
        user: "root",
        password: "aelb8362580",
        database: "questions"
    },
    dumpToFile: `src/database/backup/questionsBackup.sql`
});