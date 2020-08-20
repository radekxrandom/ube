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
import { PlaceContext } from "./contexts/PlaceContext";
const DrawerContainer = React.lazy(() =>
  import("./containers/DrawerContainer")
);

const routes = {
  "/": () => <Main />,
  "/contact": () => <Contact />,
  "/quotation": () => <Quotation />,
  "/article/:title": ({ title }) => <ArticleFunctional title={title} />
};

const App = () => {
  const { place } = React.useContext(PlaceContext);
  const routeResult = useRoutes(routes);

  const [state, showMenu, closeMenu] = useHamburger();
  let pach = place === "main" ? "limit" : "nolimit";
  return (
    <>
      <div className={pach}>
        <Nav showMenu={showMenu} hamb={state.hamb} shown={state.shown} />
        {state.shown && (
          <React.Suspense fallback={<span></span>}>
            <DrawerContainer closeMenu={closeMenu} shown={state.shown} />
          </React.Suspense>
        )}
        {routeResult}
      </div>
    </>
  );
};

export default App;
