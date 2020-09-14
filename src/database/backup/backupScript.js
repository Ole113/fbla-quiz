const MYSQLDUMP = require("mysqldump");
const CONFIG = require("../questionCompiler/config.json");

//Uses the NPM module mysqldump to connect to the database and backup the information into the backups folder.
MYSQLDUMP({
    connection: {
        host: CONFIG.host,
        user: CONFIG.user,
        password: CONFIG.password,
        database: CONFIG.database
    },
    dumpToFile: CONFIG.dumpFile
});