import React from "react";
import {
  accidents,
  health,
  hospital,
  retirement,
  blank,
  children,
  house,
  life,
  income
} from "../articles/pl";
import ArticlePresentational from "../components/ArticlePresentational";
import { message } from "antd";
import articleTilesOrder from "../articleTilesOrder";
import { navigate } from "hookrouter";

const articleEnum = {
  life: life,
  health: health,
  hospital: hospital,
  children: children,
  blank: blank,
  accidents: accidents,
  income: income,
  retirement: retirement,
  house: house
};

const imgEnum = {
  life: "/life.jpg",
  health: "/health.jpg",
  hospital: "/hospital.jpg",
  children: "/children.jpg",
  blank: "/def.jpg",
  accidents: "/accidents.jpg",
  income: "/income.png",
  retirement: "/retirement.jpg",
  house: "/house.jpg"
};

const titleEnum = {
  life: "Ubezpieczenie na życie",
  health: "Ubezpieczenie od chorób",
  hospital: "Ubezpieczenie pobytu w szpitalu",
  children: "Ubezpieczenie dzieci",
  blank: null,
  accidents: "Ubezpieczenie wypadkowe",
  income: "Ubezpieczenie dochodu",
  retirement: "Prywatna emerytura",
  house: "Zabezpieczenie kredytu na dom"
};

const ArticleFunctional = props => {
  const [state, setState] = React.useState({
    red: false,
    whereTo: "",
    lcl: "",
    rcl: "",
    cs: "smenu hid",
    shown: false,
    hamb: "hamb",
    article: {},
    title: "",
    img: "",
    index: 0,
    name: ""
  });

  const goPlaces = React.useCallback(
    i => {
      const { index } = state;
      const place = articleTilesOrder[index + i];
      if (!place) {
        message.warning("Brak kolejnego artykułu do pokazania");
        return false;
      }
      navigate(`/article/${place}`);
    },
    [state]
  );

  const handleKeyboardControll = React.useCallback(
    e => {
      if (e.keyCode !== 37 && e.keyCode !== 39) {
        return;
      }
      //convert keyCode to either -1 or 1
      const incrementIndexBy = (38 - e.keyCode) * -1;
      goPlaces(incrementIndexBy);
    },
    [goPlaces]
  );

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyboardControll);

    return () => {
      window.removeEventListener("keyup", handleKeyboardControll);
    };
  }, [handleKeyboardControll]);

  React.useEffect(() => {
    //setupArticle();
    const articleName = props.title;
    const index = articleTilesOrder.findIndex(el => el === articleName);
    const leftcl = index > 0 ? "active left" : "unactive left";
    const rightcl = index < 8 ? "active right" : "unactive right";

    setState(s => ({
      ...s,
      title: titleEnum[articleName],
      article: articleEnum[articleName],
      img: imgEnum[articleName],
      rcl: rightcl,
      lcl: leftcl,
      index,
      name: articleName,
      place: ""
    }));
  }, [props.title]);

  return (
    <ArticlePresentational
      articleName={state.name}
      goPlaces={goPlaces}
      rcl={state.rcl}
      hamb={state.hamb}
      lcl={state.lcl}
      article={state.article}
      title={state.title}
      img={state.img}
    />
  );
};

export default ArticleFunctional;

/*
const setupArticle = React.useCallback(
  _ => {
    const articleName = props.title;
    const index = articleTilesOrder.findIndex(el => el === articleName);
    const leftcl = index > 0 ? "active left" : "unactive left";
    const rightcl = index < 8 ? "active right" : "unactive right";

    setState(s => ({
      ...s,
      title: titleEnum[articleName],
      article: articleEnum[articleName],
      img: imgEnum[articleName],
      rcl: rightcl,
      lcl: leftcl,
      index,
      name: articleName,
      place: ""
    }));
  },
  [props.title]
);
*/
