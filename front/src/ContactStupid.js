import React from "react";
import Nav from "./components/Nav";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ContactStupid = props => {
  return (
    <>
      <Nav showMenu={props.showMenu} hamb={props.hamb} />
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
            <form onSubmit={props.handleContact} noValidate>
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
                  value={props.choice}
                  onChange={props.choiceChange}
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
                onChange={props.handleInputChange}
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

export default ContactStupid;
