import React from "react";
import "./App.css";
import Main from "./containers/Main";
import Contact from "./components/Contact";
import Quotation from "./components/Quotation";
import ArticleContainer from "./containers/ArticleContainer";
import Nav from "./components/Nav";
import useHamburger from "./hooks/useHamburger";
import { useRoutes } from "hookrouter";
import ArticleFunctional from "./containers/ArticleFunctional";
import DrawerContainer from "./containers/DrawerContainer";

const routes = {
  "/": () => <Main />,
  "/contact": () => <Contact />,
  "/quotation": () => <Quotation />,
  "/article/:title": ({ title }) => <ArticleFunctional title={title} />
};

const App = () => {
  const routeResult = useRoutes(routes);
  const [state, showMenu] = useHamburger();
  return (
    <>
      <Nav showMenu={showMenu} hamb={state.hamb} />
      <DrawerContainer shown={state.shown} />
      {routeResult}
    </>
  );
};

export default App;
