import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { accidents, health, hospital, retirement, dummy } from "./articles/pl";

class Article extends Component {
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
      title: ""
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

  setupArticle = id => {
    switch (id) {
      case 2:
        this.setState({
          article: accidents,
          title: "Ubezpieczenie od wypadków"
        });
        break;
      case 3:
        this.setState({
          article: health,
          title: "Ubezpieczenie od chorób"
        });
        break;
      case 9:
        this.setState({
          article: hospital,
          title: "Ubezpieczenie od pobytu w szpitalu"
        });
        break;
      case 8:
        this.setState({
          article: retirement,
          title: "Prywatna emerytura"
        });
        break;
      default:
        this.setState({
          article: dummy,
          title: "Paulus vocatus apostolus Christi Iesu"
        });
    }
    var leftcl;
    var rightcl;

    if (id === 1) {
      leftcl = "unactive left";
      rightcl = "active right";
    } else if (id === 9) {
      leftcl = "active left";
      rightcl = "unactive right";
    } else {
      leftcl = "active left";
      rightcl = "active right";
    }

    this.setState({
      red: false,
      whereTo: "",
      rcl: rightcl,
      lcl: leftcl
    });
  };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    console.log(id);
    this.setupArticle(id);
  }

  componentDidUpdate = async prevProps => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log("i fired");
      const id = parseInt(this.props.match.params.id);
      console.log(id);
      this.setupArticle(id);
    }
  };

  goPlaces = i => {
    var id = parseInt(this.props.match.params.id);
    if (id === 1 && i === -1) {
      return;
    }
    if (id === 9 && i === +1) {
      return;
    }
    if (id === 2 && i === -1) {
      this.setState({
        lcl: "unactive left"
      });
    } else if (id === 1 && i === +1) {
      this.setState({
        lcl: "active left"
      });
    } else if (id === 9 && i === -1) {
      this.setState({
        rcl: "active right"
      });
    } else if (id === 8 && i === +1) {
      this.setState({
        rcl: "unactive  right"
      });
    } else {
      this.setState({
        rcl: "active right",
        lcl: "active left"
      });
    }
    let place = parseInt(id + i);
    this.props.history.push(`/article/${place}`);
  };

  onArrowPress = e => {
    console.log("pach");
    if (e.keyCode === 37) {
      this.goPlaces(-1);
      return;
    }
    if (e.keyCode === 39) {
      this.goPlaces(+1);
      return;
    }
  };

  render() {
    return (
      <>
        <Nav showMenu={this.showMenu} hamb={this.state.hamb} />
        <div className={this.state.lcl} onClick={i => this.goPlaces(-1)}>
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
        <div className={this.state.rcl} onClick={i => this.goPlaces(1)}>
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
        <div className="article" onKeyDown={this.onArrowPress}>
          <div className="articleHeader">
            <div className="image">
              <img src="/hospital.jpg" className="img" alt="Pach" />
            </div>
            <div className="title">
              <h1 className="titletext">{this.state.title}</h1>
            </div>
          </div>
          <div className="articletext">
            {Object.entries(this.state.article).map((article, i) => (
              <p>{this.state.article[i]}</p>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Article;
