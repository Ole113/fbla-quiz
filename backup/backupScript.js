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
    //CHANGE FORMAT TO HOUR-DAY-MONTH-YEAR
    dumpToFile: `/backups/backup-${String(DATE.getDate()).padStart(2, "0")}-${String(DATE.getMonth() + 1).padStart(2, "0")}-${DATE.getFullYear()}-${DATE.getHours()}.sql`
});
