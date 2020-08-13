import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing.js";
import Practice from "./pages/Practice"
import QA from "./pages/QA.js";
import Quiz from "./pages/Quiz.js";
import Error from "./pages/Error.js";
/*
  Switch tag makes it so that only one Route component can be rendered at one time.
  
  Route tags render the specified component when the path is correct.
	The error pages doesn't use the "exact" parameter so if no other exact 
	paths have been rendered then as long as the path starts with / (which it always will) then the Error page will be rendered.
	The error will be from a 404 error page not found.
*/
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Practice} exact path="/practice" />
        <Route component={QA} exact path="/qa" />
        <Route component={Quiz} exact path="/quiz" />
        <Route component={Error} path="/" />
      </Switch>
    </div>
  );
}