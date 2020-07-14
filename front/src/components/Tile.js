import React from "react";

const Tile = props => {
  const articleUrlEnum = {
    life: 1,
    health: 2,
    children: 3,
    house: 4,
    blank: null,
    hospital: 6,
    income: 7,
    retirement: 8,
    accidents: 9
  };

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
  console.log(tileName);
  console.log(props.tileName);
  console.log(articleTitleEnum[tileName]);
  return (
    <div
      className={`item ${tileName}`}
      onClick={i => props.goToArticle(tileName)}
    >
      <span className="pach">{articleTitleEnum[tileName]}</span>
    </div>
  );
};

export default Tile;
