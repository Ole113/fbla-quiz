const mysqldump = require("mysqldump");
 
mysqldump({
    connection: {
        host: "localhost",
        user: "root",
        password: "aelb8362580",
        database: "questions"
    },
    dumpToFile: "./dump.sql",
});