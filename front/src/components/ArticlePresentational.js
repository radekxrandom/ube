import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import usePlace from "../hooks/usePlace";

const ArticlePresentational = props => {
  usePlace(props.articleName);

  return (
    <>
      <div className="articleWrapper">
        <div className={props.lcl} onClick={i => props.goPlaces(-1)}>
          <div className="iconleft">
            <ArrowBackIosIcon className="arrowBack" />
          </div>
        </div>
        <div className={props.rcl} onClick={i => props.goPlaces(1)}>
          <div className="iconright">
            <ArrowForwardIosIcon className="arrowForward" />
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
      </div>
    </>
  );
};

export default ArticlePresentational;
