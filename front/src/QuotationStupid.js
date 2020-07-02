import React from "react";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const QuotationStupid = props => {
  return (
    <>
      <Nav showMenu={props.showMenu} hamb={props.hamb} />
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
            <form onSubmit={props.handleQuotation} noValidate>
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
                onChange={props.handleInputChange}
                autoComplete="name"
                autoFocus
                error={props.errors.name}
                helperText={props.errors.name ? props.errors.name : ""}
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
                onChange={props.handleInputChange}
                autoComplete="phone"
                autoFocus
                error={props.errors.phone}
                helperText={props.errors.phone ? props.errors.phone : ""}
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
                onChange={props.handleInputChange}
                autoComplete="email"
                autoFocus
                error={props.errors.email}
                helperText={props.errors.email ? props.errors.email : ""}
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
                onChange={props.handleInputChange}
                autoComplete="age"
                autoFocus
                error={props.errors.age}
                helperText={props.errors.age ? props.errors.age : ""}
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
                onChange={props.handleInputChange}
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
                  onChange={props.handleInputChange}
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
                  onChange={props.handleInputChange}
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
                onChange={props.handleInputChange}
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
};

export default QuotationStupid;
