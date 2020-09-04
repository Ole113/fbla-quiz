const MYSQLDUMP = require("mysqldump");

const DATE = new Date();

MYSQLDUMP({
    connection: {
        host: "localhost",
        user: "root",
        password: "aelb8362580",
        database: "questions"
    },
    dumpToFile: `/backups/backup-${String(DATE.getDate()).padStart(2, "0")}-${String(DATE.getMonth() + 1).padStart(2, "0")}-${DATE.getFullYear()}-${DATE.getHours()}.sql`
});
