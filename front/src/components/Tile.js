import React from "react";
import { navigate } from "hookrouter";

const Tile = props => {
  const articleTitleEnum = {
    life: "Ubezpieczenie na zycie",
    health: "Ubezpieczenie od chorob",
    children: "Ubezpieczenie dzieci",
    house: "Zabezpieczenie kredytu na dom",
    blank: null,
    hospital: "Ubezpieczenie pobytu w szpitalu",
    income: "Ubezpieczenie dochodu",
    retirement: "Prywatna emerytura",
    accidents: "Ubezpieczenie wypadkowe"
  };
  const { tileName } = props;
  return (
    <div
      className={`item ${tileName}`}
      onClick={() => navigate(`/article/${tileName}`)}
    >
      <span className="pach">{articleTitleEnum[tileName]}</span>
    </div>
  );
};

export default Tile;
