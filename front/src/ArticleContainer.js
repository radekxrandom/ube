import React, { Component } from "react";
import { accidents, health, hospital, retirement, blank } from "./articles/pl";
import ArticlePresentational from "./ArticlePresentational";
import { message } from "antd";

const articleEnum = {
  life: blank,
  health: health,
  children: blank,
  house: blank,
  blank: blank,
  hospital: hospital,
  income: blank,
  retirement: retirement,
  accidents: accidents
};

const imgEnum = {
  life: "/def.jpg",
  health: "/illness.jpg",
  children: "/def.jpg",
  house: "/def.jpg",
  blank: "/def.jpg",
  hospital: "/hospital.jpg",
  income: "/def.jpg",
  retirement: "/prowansale.jpg",
  accidents: "/accident.jpg"
};

const titleEnum = {
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
      tileOrder: [
        "life",
        "health",
        "children",
        "house",
        "blank",
        "hospital",
        "income",
        "retirement",
        "accidents"
      ],
      index: 0
    };
  }

  showMenu = () => {
    console.log("pach");
    if (this.state.shown === true) {
      this.setState({
        cs: "smenu hid",
        hamb: "hamb",
        shown: false
      });
    } else if (this.state.shown === false) {
      this.setState({
        cs: "smenu",
        hamb: "hamb rot",
        shown: true
      });
    }
  };

  setupArticle = () => {
    const articleName = this.props.match.params.title;

    const index = this.state.tileOrder.findIndex(el => el === articleName);
    const leftcl = index > 0 ? "active left" : "unactive left";
    const rightcl = index < 8 ? "active right" : "unactive right";

    this.setState({
      title: titleEnum[articleName],
      article: articleEnum[articleName],
      img: imgEnum[articleName],
      rcl: rightcl,
      lcl: leftcl,
      index
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
    const { tileOrder, index } = this.state;
    const place = tileOrder[index + i];
    if (!place) {
      message.warning("Brak kolejnego artykułu do pokazania");
      return false;
    }
    this.props.history.push(`/article/${place}`);
  };

  componentDidUpdate = async prevProps => {
    if (this.props.match.params.title !== prevProps.match.params.title) {
      this.setupArticle();
    }
  };
  render() {
    return (
      <ArticlePresentational
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
