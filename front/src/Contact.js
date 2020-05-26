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
import { message } from "antd";
import { handleInputChange, handleContact } from "./Util";

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
      hamb: "hamb",
      name: "",
      phone: "",
      body: "",
      errors: {}
    };
  }

  handleInputChange = handleInputChange.bind(this);
  handleContact = handleContact.bind(this);

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
              <form onSubmit={this.handleContact} noValidate>
                <TextField
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Imie"
                  name="name"
                  onChange={this.handleInputChange}
                  autoComplete="name"
                  autoFocus
                  error={this.state.errors.name}
                  helperText={
                    this.state.errors.name ? this.state.errors.name : ""
                  }
                />
                <TextField
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Numer telefonu"
                  name="phone"
                  onChange={this.handleInputChange}
                  autoComplete="phone"
                  autoFocus
                  error={this.state.errors.phone}
                  helperText={
                    this.state.errors.phone ? this.state.errors.phone : ""
                  }
                />
                <TextField
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto",
                    marginBottom: "1%"
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adres email"
                  name="email"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
                  error={this.state.errors.email}
                  helperText={
                    this.state.errors.email ? this.state.errors.email : ""
                  }
                />
                <FormControl
                  variant="outlined"
                  className="formcont"
                  style={{
                    marginBottom: "1%",
                    width: "100%",
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
                    width: "100%",
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
                    width: "100%",
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
                  style={{ width: "100%" }}
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
