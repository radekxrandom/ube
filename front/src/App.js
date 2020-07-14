import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ContactStupid from "./ContactStupid";
import QuotationStupid from "./QuotationStupid";
import FormsHOC from "./FormsHOC";
import ArticleContainer from "./ArticleContainer";

const wrappedContact = FormsHOC(ContactStupid);
const wrappedQuotation = FormsHOC(QuotationStupid);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact" component={wrappedContact} />
          <Route path="/article/:title" component={ArticleContainer} />
          <Route path="/quotation" component={wrappedQuotation} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
