import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import QAPage from "./pages/QAPage.js";
import QuizPage from "./pages/QuizPage.js";
import ErrorPage from "./pages/ErrorPage.js";

import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure()

/*
  Switch tag makes it so that only one Route component can be rendered at one time.
  
  Route tags render the specified component when the path is correct.
	The error pages doesn't use the "exact" parameter so if no other exact 
	paths have been rendered then as long as the path starts with / (which it always will) then the Error page will be rendered.
	The error will be a 404 error page not found.
*/

/**
 * The main component that is rendered by index.js which is rendered into the index.html div.
 */
export default function App() {  
  return (
    <div className="App">
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={QAPage} exact path="/qa" />
        <Route component={QuizPage} exact path="/quiz" />
        <Route component={ErrorPage} path="/" />
      </Switch>
    </div>
  );
}