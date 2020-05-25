import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      title: "",
      mes: "",
      mobile: "",
      email: "",
      prefCon: "",
      resp: "",
      choice: "",
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

  choiceChange = e => {
    this.setState({
      choice: e.target.value
    });
  };

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
        <Nav showMenu={this.showMenu} hamb={this.state.hamb} />
        <div className="article">
          <div className="contform">
            <div className="contInfo">
              <h1>Skontaktuj sie ze mna</h1>
              <h3>Imie Nazwisko</h3>
              <div className="inf">
                <span style={{ marginRight: "0.5%" }}>email@email.com</span>
                <span>123456701</span>
              </div>
            </div>
            <div className="mess">
              <form onSubmit={this.handleSubmit} noValidate>
                <TextField
                  style={{
                    width: "40%",
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
                    width: "40%",
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
                <FormControl
                  variant="outlined"
                  className="formcont"
                  style={{
                    marginBottom: "1%",
                    width: "40%",
                    textAlign: "right",
                    backgroundColor: "#FCFCFC !important"
                  }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Preferowany sposob kontaktu
                  </InputLabel>
                  <Select
                    style={{ backgroundColor: "#FCFCFC !important" }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.choice}
                    onChange={this.choiceChange}
                    labelWidth="30%"
                  >
                    <MenuItem value="">
                      <em>Obojetnie</em>
                    </MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                    <MenuItem value={"tel"}>Telefon</MenuItem>
                    <MenuItem value={"sms"}>Sms</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  style={{
                    width: "40%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  name="mes"
                  style={{
                    width: "40%",
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
                  style={{ width: "40%" }}
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

export default Contact;
