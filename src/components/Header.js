import React, { useState, useEffect } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Grow,
  Collapse
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { green } from "@material-ui/core/colors";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {Link as Scroll} from 'react-scroll';

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "Nunito",
    fontSize: 20,
  },
  icon: {
    color: "#fff",
    fontSize: 40,
  },
  titleColor: {
    color: green[300],
  },

  //   Main content

  mainContent: {
    color: "#fff",
    fontSize: "2.5rem",
    textAlign: "center",
    fontFamily: "Nunito",
  },
  expandIcon: {
    color: green[600],
    fontSize: "4rem",
  },
});

const Header = () => {
  let classes = useStyle();
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    setChecked(true);
  });

  return (
    <div className={classes.root} id="header" >
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography className={classes.appbarTitle}>
            My<span className={classes.titleColor}>Island.com</span>
          </Typography>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.mainContent}>
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <h1>
            Welcome to <br />
            My <span className={classes.titleColor}>Island.com</span>
          </h1>
        </Grow>
        <Collapse in={checked} {...checked ? {timeout: 1500} : {}} >
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMore className={classes.expandIcon} />
            </IconButton>
          </Scroll>
        </Collapse>
      </div>
    </div>
  );
};

export default Header;
