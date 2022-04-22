<img src = "/src/assets/images/fblaLogo.png" width = "100px" >
<h1 style = "display: inline" >FBLA Quiz 2021</h1><br /><br />
Created by Alex for the FBLA Coding and Programming 2020-2021 Competition.
<br /><br />
This project was bootstrapped with Create React App.

## Building
1. Install MySQL<br />
2. Create a database called *questions*<br />
3. Create a table in the *questions* database. Use the exact table in `src/database/questionSchema.sql`<br />
4. Add the questions in `src/database/insertQuestions.sql`<br />
5. In `src/database/questionCompiler/config.js` change the host, user, password, and database fields to have the correct information. You should only need to change the password field to your you set up MySQL with.<br />
6. Install the node modules with `npm install`<br />
7. Start the backend server `nodemon server.js` If you run into the error `Client does not support authentication protocol requested by server; consider upgrading MySQL client` refer to https://stackoverflow.com/a/50131831<br />
8. Either:
    Start the app in development mode `npm start` or <br />
    Build the app for production `npm run build`

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

# Injected by Create React App:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
