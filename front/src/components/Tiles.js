import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Tile from "./Tile";

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      whereTo: "",
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
      ]
    };
  }

  goToArticle = i => {
    this.setState({
      redirect: true,
      whereTo: i
    });
  };

  render() {
    if (this.state.redirect == true) {
      return <Redirect push to={`/article/${this.state.whereTo}`} />;
    }
    // life, ill, children, house, blank, hospital, income, retirement, accidents
    return (
      <>
        <div className="container">
          {this.state.tileOrder.map(el => (
            <Tile tileName={el} goToArticle={this.goToArticle} />
          ))}
        </div>
        <div className={this.props.cs}>
          <div className="its">
            <div className="it it1">KONTAKT</div>
            <div className="it it2">WYCENA</div>
          </div>
        </div>
      </>
    );
  }
}

export default Tiles;
