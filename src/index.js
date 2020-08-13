import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App.js";

ReactDOM.render(
  /*
    React-Router allows navigation without having to refresh the page.
    React-Router docs says 

    "React Router keeps your UI in sync with the URL. 
    It has a simple API with powerful features like lazy code 
    loading, dynamic route matching, and location transition handling 
    built right in. Make the URL your first thought, not an after-thought."

    React-Router has 4 main tags:
    <BrowserRouter> which wraps the elements that are being rendered.
    <Switch> that makes it so only one page can be rendered at a time.
    <Route> which tells React-Router what to render when a URL path is completed.
    <Link> which works like a <a> tag and loads the specified URL when activated without having to refresh the page.
  */
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

/*
  "If you want your app to work offline and load faster, you can change
  unregister() to register() below. Note this comes with some pitfalls."
  https://create-react-app.dev/docs/making-a-progressive-web-app/.
*/
serviceWorker.register();
