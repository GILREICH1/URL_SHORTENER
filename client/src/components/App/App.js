import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "../Form/Form";
import Statistics from "../Stats/Statistics";
import Redirector from "../Redirector/Redirector";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>URL Shortener</h1>
        <Switch>
          <Route path="/stats/:shortURL" component={Statistics} />
          <Route path="/short/:shortURL" component={Redirector} />
          <Route exact path="/" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
