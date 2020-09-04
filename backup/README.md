## Dynamic Database Backup
The Node.js server sets the values of the /questions JSON to get database questions. The server also runs a CRON tab which is a time based task schedular. The CRON tab will backup the database every 180 minutes(3 hours). The backup happens in the /backup/backups directory and are labeled in the following format
`backup-hour-day-month-year`
With hour, day, month, and year replaced with their respective values.

## Starting Dynamic Backup
To start the backup run the server.js run with `nodemon server.js`.
To stop the server press `CTRL + C`.

## Disabling Dynamic Backup
To disable dynamic database backup comment out the following code from the `server.js` file in the root directory.
```javascript
//Schedules a CRON job every 3 hours(180 minutes) to backup the database to the backups folder.
CRON.schedule("*/180 * * * *", () => {
    let exec = require("child_process").exec, child;

    child = exec("node backup/backupScript.js", (error, stdout, stderr) => {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error) console.log("Exec Error: " + error);
    });
});
```
