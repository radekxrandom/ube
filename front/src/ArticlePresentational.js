import React from "react";
import Nav from "./components/Nav";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const ArticlePresentational = props => {
  return (
    <>
      <Nav showMenu={props.showMenu} hamb={props.hamb} />
      <div className={props.lcl} onClick={i => props.goPlaces(-1)}>
        <div className="iconleft">
          <ArrowBackIosIcon
            style={{
              position: "absolute",
              left: "30%",
              top: "50%",
              fontSize: 50
            }}
          />
        </div>
      </div>
      <div className={props.rcl} onClick={i => props.goPlaces(1)}>
        <div className="iconright">
          <ArrowForwardIosIcon
            style={{
              position: "absolute",
              right: "30%",
              top: "50%",
              fontSize: 50
            }}
          />
        </div>
      </div>
      <div className="articles" onKeyDown={props.onArrowPress}>
        <div className="articleHeader">
          <div className="image">
            <img src={props.img} className="img" alt="Pach" />
          </div>
          <div className="title">
            <h1 className="titletext">{props.title}</h1>
          </div>
        </div>
        <div className="articletext">
          {Object.entries(props.article).map((article, i) => (
            <p>{props.article[i]}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlePresentational;
