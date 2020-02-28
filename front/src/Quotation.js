import React, { Component } from "react";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { person, title, mes, mobile, email } = this.state;
    let mespies = {
      person,
      title,
      mes,
      mobile,
      email
    };
    let post = await axios.post("http://localhost:9000/api/sendmail", mespies);
    console.log(post.status);
    console.log(post.data);
    let rs = post.data;
    this.setState({
      resp: rs.err
    });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="article">
          <div className="contform">
            <div className="contInfo">
              <h1>Uzyskaj wycene</h1>
              <div className="inf">
                <span style={{ marginRight: "0.5%" }}>email@email.com</span>
                <span>123456701</span>
              </div>
            </div>
            <div className="mess">
              <form onSubmit={this.handleSubmit} noValidate>
                <TextField
                  style={{
                    width: "35%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile number"
                  name="mobile"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  style={{
                    width: "35%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your email address"
                  name="email"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  style={{
                    width: "35%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="zawod"
                  label="Zawod"
                  name="zawod"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  style={{
                    width: "35%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="choroba"
                  label="Chorujesz na cos?"
                  name="choroba"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  name="mes"
                  style={{
                    width: "35%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  multiline
                  rows="7"
                  fullWidth
                  variant="outlined"
                  onChange={this.handleInputChange}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  style={{ width: "35%" }}
                >
                  Wyslij
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Quotation;
