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
            <h1>Skontaktuj sie ze mna</h1>
            <h3>Imie Nazwisko</h3>
            <div className="inf">
              <span className="emSpan">email@email.com</span>
              <span>123456701</span>
            </div>
          </div>
          <div className="mess">
            <form onSubmit={submit} noValidate>
              <TextField
                className="baseInput"
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
                autoFocus
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
                autoFocus
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
                    <em>Obojetnie</em>
                  </MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="tel">Telefon</MenuItem>
                  <MenuItem value="sms">Sms</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="baseInput"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                onChange={handleInput}
                autoComplete="email"
                autoFocus
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
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
                Wyslij
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default ContactStupid;
