const MYSQLDUMP = require("mysqldump");
console.log(1);
MYSQLDUMP({
    connection: {
        host: "localhost",
        user: "root",
        password: "aelb8362580",
        database: "questions"
    },
    dumpToFile: `/dump.sql`,
});