import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import useInputHandler from "../hooks/useInputHandler";
import useFormSubmit from "../hooks/useFormSubmit";
import usePlace from "../hooks/usePlace";

const useStyles = makeStyles(() => ({
  pTitle: {
    marginTop: "-1%",
    marginbBottom: "-1%"
  },
  textF: {
    width: "100%",
    display: "block",
    margin: "auto",
    marginBottom: "1%"
  },
  sel: {
    backgroundColor: "#FCFCFC !important"
  }
}));

const QuotationStupid = props => {
  const classes = useStyles();
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
        <div className="contform">
          <div className="contInfo">
            <h1>Uzyskaj wycenę</h1>
            <div className="inf">
              <p classNames={classes.pTitle}>Wypełnij formularz,</p>
              <p>a skontaktujemy się z Tobą w sprawie wyceny</p>
            </div>
          </div>
          <div className="mess">
            <form onSubmit={submit} noValidate>
              <TextField
                classNames={classes.textF}
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Imię"
                name="name"
                onChange={handleInput}
              />
              <TextField
                classNames={classes.textF}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Numer telefonu"
                name="phone"
                onChange={handleInput}
                autoComplete="phone"
                error={err.phone}
                helperText={err.phone ? err.phone : ""}
              />
              <TextField
                classNames={classes.textF}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                onChange={handleInput}
                autoComplete="email"
                error={err.email}
                helperText={err.email ? err.email : ""}
              />
              <TextField
                classNames={classes.textF}
                variant="outlined"
                margin="normal"
                fullWidth
                id="age"
                label="Wiek"
                name="age"
                onChange={handleInput}
                error={err.age}
                helperText={err.age ? err.age : ""}
              />
              <TextField
                classNames={classes.textF}
                variant="outlined"
                margin="normal"
                fullWidth
                id="zawod"
                label="Zawód"
                name="zawod"
                onChange={handleInput}
              />
              <FormControl variant="outlined" className="formcont">
                <InputLabel id="demo-simple-select-outlined-label">
                  Czy palisz papierosy?
                </InputLabel>
                <Select
                  className="selCol"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="papierosy"
                  onChange={handleInput}
                  labelWidth="30%"
                >
                  <MenuItem value="none">
                    <em>Wole nie odpowiadać</em>
                  </MenuItem>
                  <MenuItem value="tak">Tak</MenuItem>
                  <MenuItem value="nie">Nie</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-multiline-static"
                label="Tu możesz wpisać dodatkowe informacje"
                name="mes"
                classNames={classes.textF}
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
                className="btnWidth100"
              >
                Wyślij
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotationStupid;
