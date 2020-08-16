import React, { useState } from "react";

export const PlaceContext = React.createContext(["", () => {}]);

export const PlaceContextProvider = ({ children }) => {
  const [place, setPlace] = useState("");
  return (
    <PlaceContext.Provider value={{ place, setPlace }}>
      {children}
    </PlaceContext.Provider>
  );
};
