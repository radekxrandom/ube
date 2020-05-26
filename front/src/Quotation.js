import React, { Component } from "react";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { handleInputChange, handleQuotation } from "./Util";

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      cs: "smenu hid",
      shown: false,
      hamb: "hamb",
      name: "",
      age: "",
      occupation: "",
      health: "",
      fags: "",
      body: "",
      email: "",
      phone: "",
      errors: {}
    };
  }

  handleInputChange = handleInputChange.bind(this);
  handleQuotation = handleQuotation.bind(this);

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
      <>
        <Nav showMenu={this.showMenu} hamb={this.state.hamb} />
        <div className="article">
          <div className="contform" style={{ marginTop: "5%" }}>
            <div className="contInfo">
              <h1>Uzyskaj wycene</h1>
              <div className="inf">
                <p style={{ marginTop: "-1%", marginBottom: "-1%" }}>
                  Wypelnij formularz,
                </p>
                <p>a skontaktuje sie z toba i podam ci wycene.</p>
              </div>
            </div>
            <div className="mess">
              <form onSubmit={this.handleQuotation} noValidate>
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
                  id="age"
                  label="Wiek"
                  name="age"
                  onChange={this.handleInputChange}
                  autoComplete="age"
                  autoFocus
                  error={this.state.errors.age}
                  helperText={
                    this.state.errors.age ? this.state.errors.age : ""
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
                  id="zawod"
                  label="Zawod"
                  name="zawod"
                  onChange={this.handleInputChange}
                  autoComplete="email"
                  autoFocus
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
                    Chorujesz na cos
                  </InputLabel>
                  <Select
                    style={{ backgroundColor: "#FCFCFC !important" }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="choroba"
                    onChange={this.handleInputChange}
                    labelWidth="30%"
                  >
                    <MenuItem value="tak">Tak</MenuItem>
                    <MenuItem value={"nie"}>Nie</MenuItem>
                  </Select>
                </FormControl>
                <br />
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
                    Czy palisz papierosy?
                  </InputLabel>
                  <Select
                    style={{ backgroundColor: "#FCFCFC !important" }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="papierosy"
                    onChange={this.handleInputChange}
                    labelWidth="30%"
                  >
                    <MenuItem value="tak">Tak</MenuItem>
                    <MenuItem value={"nie"}>Nie</MenuItem>
                  </Select>
                </FormControl>

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

export default Quotation;
