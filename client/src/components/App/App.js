import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "../Form/Form";
import Statistics from "../Stats/Statistics";
import Redirector from "../Redirector/Redirector";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <div>
          <h1>URL Shortener</h1>
          <Switch>
            <Route path="/stats/:shortURL" component={Statistics} />
            <Route path="/short/:shortURL" component={Redirector} />
            <Route exact path="/" component={Form} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
