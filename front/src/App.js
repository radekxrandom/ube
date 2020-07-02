import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Article from "./Article";
import ContactStupid from "./ContactStupid";
import QuotationStupid from "./QuotationStupid";
import FormsHOC from "./FormsHOC";

const wrappedContact = FormsHOC(ContactStupid);
const wrappedQuotation = FormsHOC(QuotationStupid);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact" component={wrappedContact} />
          <Route path="/article/:id" component={Article} />
          <Route path="/quotation" component={wrappedQuotation} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
