import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Article from "./Article";
import Contact from "./Contact";
import Quotation from "./Quotation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/article/:id" component={Article} />
          <Route path="/quotation" component={Quotation} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
