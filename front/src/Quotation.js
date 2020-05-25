import React, { Component } from "react";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
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
                  label="Imie"
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
                  label="Wiek"
                  name="email"
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
                    width: "40%",
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
                    width: "40%",
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

export default Quotation;
