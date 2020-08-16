import { useState } from "react";

export default function useHamburger() {
  const [state, setState] = useState({
    cs: "smenu hid",
    shown: false,
    hamb: "hamb"
  });

  const showMenu = _ => {
    setState(prevState => ({
      ...state,
      cs: prevState.shown ? "smenu hid" : "smenu",
      hamb: prevState.shown ? "hamb" : "hamb rot",
      shown: !prevState.shown
    }));
  };
  return [state, showMenu];
}
