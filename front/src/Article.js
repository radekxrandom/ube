import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      whereTo: "",
      lcl: "",
      rcl: ""
    };
  }

  componentDidMount() {
    var id = parseInt(this.props.match.params.id);
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
  }

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

  render() {
    return (
      <>
        <Nav />
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
        <div className="article">
          <div className="image">
            <img src="/hospital.jpg" className="img" alt="Pach" />
          </div>
          <div className="title">
            <h1 className="titletext">Paulus vocatus apostolus Christi Iesu</h1>
            <h3>2020 20 20 Miasto</h3>
            <h3>Imie i Zwisko autora</h3>
          </div>
          <div className="articletext">
            <p>
              ecclesiae Dei quae est Corinthi sanctificatis in Christo Iesu
              vocatis sanctis cum omnibus qui invocant nomen Domini nostri Iesu
              Christi in omni loco ipsorum et nostro
            </p>
            <p>
              gratia vobis et pax a Deo Patre nostro et Domino Iesu Christo 4
              gratias ago Deo meo semper pro vobis in gratia Dei quae da ta est
              vobis in Christo Iesu 5 quia in omnibus divites facti estis in
              illo in omni verbo et in omni scientia
            </p>
            <p>
              sicut testimonium Christi confirmatum est in vobis 7 ita ut nihil
              vobis desit in ulla gratia expectantibus revelationem Domini
              nostri Iesu Christi 8 qui et confirmabit vos usque ad finem sine
              crimine in die adventus Domini nostri Iesu Christi 9 fidelis Deus
              per quem vocati estis in societatem Filii eius Iesu Christi Domini
              nostri
            </p>
            <p>
              bsecro autem vos fratres per nomen Domini nostri Iesu Christi ut
              id ipsum dicatis omnes et non sint in vobis scismata sitis autem
              perfecti in eodem sensu et in eadem sententia 11 significatum est
              enim mihi de vobis fratres mei ab his qui sunt Chloes quia
              contentiones inter vos sunt
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
