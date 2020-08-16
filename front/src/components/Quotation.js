import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useInputHandler from "../hooks/useInputHandler";
import useFormSubmit from "../hooks/useFormSubmit";
import usePlace from "../hooks/usePlace";

const QuotationStupid = props => {
  usePlace("quotation");
  const [state, handleInput, err, setErr] = useInputHandler({
    name: "",
    phone: "",
    email: "",
    age: "",
    occupation: "",
    health: "",
    fags: "",
    mes: ""
  });

  const [submit] = useFormSubmit(state, setErr, "url");

  return (
    <>
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
            <form onSubmit={submit} noValidate>
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
                onChange={handleInput}
                autoComplete="name"
                autoFocus
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
                onChange={handleInput}
                autoComplete="phone"
                autoFocus
                error={err.phone}
                helperText={err.phone ? err.phone : ""}
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
                onChange={handleInput}
                autoComplete="email"
                autoFocus
                error={err.email}
                helperText={err.email ? err.email : ""}
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
                onChange={handleInput}
                autoComplete="age"
                autoFocus
                error={err.age}
                helperText={err.age ? err.age : ""}
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
                onChange={handleInput}
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
                  onChange={handleInput}
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
                  onChange={handleInput}
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
                onChange={handleInput}
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
