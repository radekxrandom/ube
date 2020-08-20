import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { A, setLinkProps } from "hookrouter";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));
const quotationHref = {
  href: "/quotation"
};
const contactHref = {
  href: "/contact"
};
const Nav = props => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <A href="/" className="navMainLink">
              Ubezpiecz zycie w Irlandii
            </A>
          </Typography>
          <Button
            {...setLinkProps(quotationHref)}
            className="bts emSpan"
            variant="outlined"
          >
            Uzyskaj wycene
          </Button>
          <Button
            {...setLinkProps(contactHref)}
            className="bts navbtn"
            variant="outlined"
          >
            Kontakt
          </Button>
          <span className="hamburgerWrapper" onClick={props.showMenu}>
            <MenuIcon className={props.hamb} />
          </span>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
