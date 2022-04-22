<img src = "/src/assets/images/fblaLogo.png" width = "100px" >
<h1 style = "display: inline" >FBLA Quiz 2021</h1><br /><br />
Created by Alex for the FBLA Coding and Programming 2020-2021 Competition.
<br /><br />
This project was bootstrapped with Create React App.

## Building
1. Install MySQL - For a detailed tutorial on installing MySQL read the questionCompiler [README](src/database/questionCompiler/README.md)<br />
2. Create a database called *questions*<br />
3. Create a table in the *questions* database. Use the exact table in `src/database/questionSchema.sql`<br />
4. Either:<br />
	1. Query the default questions in `src/database/insertQuestions.sql`<br />
	2. Add custom questions by modifying the config.js file's *questions* field and adding custom questions. Two examples of how the format should look are provided. To query the custom questions navigate to `src/database/questionCompiler/compiler.js` and run `node compiler.js`.
5. In `src/database/questionCompiler/config.js` change the host, user, password, and database fields to have the correct information. You should only need to change the password field.<br />
6. Install the node modules with `npm install`<br />
7. Start the backend server `nodemon server.js` If you run into the error `Client does not support authentication protocol requested by server; consider upgrading MySQL client` refer to https://stackoverflow.com/a/50131831. To make sure the server is running go to `http://localhost:5000/questions`. There should be no connection issues and you should see the questions in JSON form.<br />
8. Either:<br />
    1. Start the app in development mode `npm start`<br />
    2. Build the app for production `npm run build`

Note: The questions API uses port 5000. If you are using a Mac make sure that AirPlay Receiver is unticked in System Preferences > Sharing > AirPlay Reveiver as it uses the same port.

## Documentation
**Library's used:**<br />
Bootstrap: https://getbootstrap.com/<br />
Google fonts: https://fonts.google.com/<br />
React: https://reactjs.org/<br />
Node-cron: https://www.npmjs.com/package/cron<br />
Express: https://www.npmjs.com/package/express<br />
Cors: https://www.npmjs.com/package/cors<br />
MySql: https://www.npmjs.com/package/mysql<br />
mysqldump: https://www.npmjs.com/package/mysqldump<br />
readline: https://www.npmjs.com/package/readline<br />
react-toastify: https://www.npmjs.com/package/react-toastify<br />
jQuery: https://code.jquery.com/<br />
Material icons: https://material.io/resources/icons/?style=baseline<br />
react-router-dom: https://www.npmjs.com/package/react-router-dom<br />
<br />
**Picture Attributions:**<br />
Fbla logos: https://www.fbla-pbl.org/cmh/logos-images/<br />
Gradient image http://www.capbl.org/conferences/nlc<br />
Card image qa http://thinkcybis.com/story/the-national-stage/<br />
Card image quiz https://www.cafbla.org/domain/30<br />
