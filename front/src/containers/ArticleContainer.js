import React, { Component } from "react";
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
  life: "/def.jpg",
  health: "/illness.jpg",
  hospital: "/hospital.jpg",
  children: "/def.jpg",
  blank: "/def.jpg",
  accidents: "/accident.jpg",
  income: "/def.jpg",
  retirement: "/prowansale.jpg",
  house: "/def.jpg"
};

const titleEnum = {
  life: "Ubezpieczenie na zycie",
  health: "Ubezpieczenie od chorob",
  hospital: "Ubezpieczenie pobytu w szpitalu",
  children: "Ubezpieczenie dzieci",
  blank: null,
  accidents: "Ubezpieczenie wypadkowe",
  income: "Ubezpieczenie dochodu",
  retirement: "Prywatna emerytura",
  house: "Zabezpieczenie kredytu na dom"
};

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  setupArticle = () => {
    const articleName = this.props.title;
    const index = articleTilesOrder.findIndex(el => el === articleName);
    const leftcl = index > 0 ? "active left" : "unactive left";
    const rightcl = index < 8 ? "active right" : "unactive right";

    this.setState({
      title: titleEnum[articleName],
      article: articleEnum[articleName],
      img: imgEnum[articleName],
      rcl: rightcl,
      lcl: leftcl,
      index,
      name: articleName
    });
  };

  handleKeyboardControll = e => {
    if (e.keyCode !== 37 && e.keyCode !== 39) {
      return;
    }
    //convert keyCode to either -1 or 1
    const incrementIndexBy = (38 - e.keyCode) * -1;
    this.goPlaces(incrementIndexBy);
  };

  componentDidMount() {
    this.setupArticle();
    window.addEventListener("keyup", this.handleKeyboardControll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyboardControll);
  };

  goPlaces = i => {
    const { index } = this.state;
    const place = articleTilesOrder[index + i];
    if (!place) {
      message.warning("Brak kolejnego artykułu do pokazania");
      return false;
    }
    this.props.history.push(`/article/${place}`);
  };

  componentDidUpdate = async prevProps => {
    if (this.props.title !== prevProps.title) {
      this.setupArticle();
    }
  };
  render() {
    return (
      <ArticlePresentational
        articleName={this.state.name}
        goPlaces={this.goPlaces}
        rcl={this.state.rcl}
        hamb={this.state.hamb}
        lcl={this.state.lcl}
        article={this.state.article}
        title={this.state.title}
        img={this.state.img}
      />
    );
  }
}

export default ArticleContainer;
