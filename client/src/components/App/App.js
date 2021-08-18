import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Statistics from "../Stats/Statistics";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>URL Shortener</h1>
        <Switch>
          <Route path="/stats">
            <Statistics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
