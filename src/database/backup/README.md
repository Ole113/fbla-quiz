## Dynamic Database Backup
The Node.js server sets the values of the /questions JSON to get database questions. The server also runs a CRON job which is a time based task schedular. The CRON tab will backup the database every 3 hours. The backup happens in the /backup/ direction in the questionsBackup.sql file.
With hour, day, month, and year replaced with their respective values.
[More Info on CRON job](https://www.npmjs.com/package/node-cronhttps://www.npmjs.com/package/node-cron)
## Starting Dynamic Backup
To start the backup run the server.js run with `nodemon server.js`.
To stop the server press `CTRL + C`.

## Disabling Dynamic Backup
To disable dynamic database backup comment out the following code from the `server.js` file in the root directory.
```javascript
//Schedules a CRON job every 3 hours to backup the database to the backups folder.
CRON.schedule("* */3 * * *", () => {
    let exec = require("child_process").exec, child;

    child = exec("node src/database/backup/backupScript.js", (error, stdout, stderr) => {
        console.log(stdout + stderr);
        if (error) console.log("Exec Error: " + error);
        console.log("Successfully backed up.");
    });
});
```