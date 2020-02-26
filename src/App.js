import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
