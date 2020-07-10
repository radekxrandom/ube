import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      whereTo: ""
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

    return (
      <>
        <div className="container">
          <div className="item st" onClick={i => this.goToArticle(1)}>
            <span className="pach">Ubezpieczenie na zycie</span>
          </div>
          <div className="item nd" onClick={i => this.goToArticle(2)}>
            <span className="pach">Ubezpieczenie od wypadkow</span>
          </div>
          <div className="item rd" onClick={i => this.goToArticle(3)}>
            <span className="pach">Ubezpieczenie od chorob</span>
          </div>

          <div className="item frth" onClick={i => this.goToArticle(4)}>
            <span className="pach">Ubezpieczenie dochodu</span>
          </div>
          <div className="item fth" onClick={i => this.goToArticle(5)}>
            <span className="pach"></span>
          </div>
          <div className="item sx" onClick={i => this.goToArticle(6)}>
            <span className="pach">Ubezpieczenie dzieci</span>
          </div>

          <div className="item sv" onClick={i => this.goToArticle(7)}>
            <span className="pach">Ubezpieczenie kredytu na dom</span>
          </div>
          <div className="item eh" onClick={i => this.goToArticle(8)}>
            <span className="pach">Prywatna emerytura</span>
          </div>
          <div className="item nin" onClick={i => this.goToArticle(9)}>
            <span className="pach">Ubezpieczenie od pobytu w szpitalu</span>
          </div>
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
