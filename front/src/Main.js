import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Frame0 from "./components/Frame0";
import Tiles from "./components/Tiles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cs: "smenu hid",
      shown: false,
      hamb: "hamb"
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
  render() {
    return (
      <div className="dog">
        <Nav showMenu={this.showMenu} hamb={this.state.hamb} />
        <Tiles cs={this.state.cs} />
      </div>
    );
  }
}
export default Main;
