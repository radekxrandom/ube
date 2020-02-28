import React, { useState, useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Nav = props => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" style={{ marginBottom: "0.1%" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Ubezpiecz zycie w Irlandii
            </Link>
          </Typography>

          <Button
            component={Link}
            to={"/quotation"}
            style={{ marginRight: "0.5%" }}
            variant="contained"
          >
            Uzyskaj wycene
          </Button>
          <Button
            component={Link}
            to={"/contact"}
            style={{ marginLeft: "0.5%" }}
            variant="contained"
            color="secondary"
          >
            Kontakt
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;