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

const ContactStupid = React.memo(props => {
  usePlace("contact");
  const [state, handleInput, err, setErr] = useInputHandler({
    name: "",
    phone: "",
    email: "",
    prefers: "",
    mes: ""
  });

  const [submit] = useFormSubmit(state, setErr, "url");

  return (
    <>
      <div className="article">
        <div className="contform">
          <div className="contInfo">
            <h1>Skontaktuj się ze mną</h1>
            <h3>Imię Nazwisko</h3>
            <div className="inf">
              <span className="emSpan">grazyna@rafrom.com</span>
              <span>089 456 4400</span>
            </div>
          </div>
          <div className="mess">
            <form onSubmit={submit} noValidate>
              <TextField
                className="baseInput"
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Imię"
                name="name"
                onChange={handleInput}
              />
              <TextField
                className="baseInput"
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
                className="baseInput"
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
              <FormControl variant="outlined" className="formcont">
                <InputLabel id="demo-simple-select-outlined-label">
                  Preferowany sposob kontaktu
                </InputLabel>
                <Select
                  className="selCol"
                  name="prefers"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleInput}
                  labelWidth="30%"
                >
                  <MenuItem value="none">
                    <em>Obojętnie</em>
                  </MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="tel">Telefon</MenuItem>
                  <MenuItem value="sms">Sms</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-multiline-static"
                label="Tu możesz wpisać dodatkowe informacje"
                name="mes"
                className="baseInput"
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
});

export default ContactStupid;
