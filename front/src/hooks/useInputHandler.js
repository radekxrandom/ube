import { useState } from "react";

export default function useInputHandler(initialState) {
  const [state, setState] = useState(initialState);
  const [err, setErr] = useState({});

  const handleInput = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
    if (name === "phone" || name === "email") {
      setErr({});
    }
  };

  return [state, handleInput, err, setErr];
}
