import { useState } from "react";

export default function useHamburger() {
  const [state, setState] = useState({
    cs: "smenu hid",
    shown: false,
    hamb: "hamb"
  });

  const closeMenu = e => {
    console.log(e.target.classList);
    console.log(e.currentTarget?.classList);
    if (e.target.classList?.contains("hamb") || e.target.tagName === "path") {
      return false;
    }
    setState({
      ...state,
      cs: "smenu hid",
      hamb: "hamb unrot",
      shown: false
    });
  };

  const showMenu = e => {
    setState(prevState => ({
      ...state,
      cs: prevState.shown ? "smenu hid" : "smenu",
      hamb: prevState.shown ? "hamb unrot" : "hamb rot",
      shown: !prevState.shown
    }));
  };
  return [state, showMenu, closeMenu];
}
