import React from "react";
import Tile from "../components/Tile";
import articleTilesOrder from "../articleTilesOrder";
import usePlace from "../hooks/usePlace";

const Main = props => {
  usePlace("main");
  return (
    <>
      <div className="container">
        {articleTilesOrder.map(el => (
          <Tile tileName={el} />
        ))}
      </div>
    </>
  );
};
export default Main;
