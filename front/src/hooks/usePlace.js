import React from "react";
import { PlaceContext } from "../contexts/PlaceContext";

export default function usePlace(placeName) {
  const { setPlace } = React.useContext(PlaceContext);

  React.useEffect(() => {
    setPlace(placeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeName]);
}
