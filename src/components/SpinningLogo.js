import React from "react";
import { makeStyles } from "@material-ui/core";

import reactLogo from "../images/react-logo.svg";

const useStyles = makeStyles({
  logo: {
    animation: "$app-logo-spin infinite 20s linear",
    height: "15vmin",
    pointerEvents: "none",
  },
  "@keyframes app-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

const SpinningLogo = (props) => {
  const classes = useStyles();

  return <img src={reactLogo} alt="logo" className={classes.logo} />;
};

export default SpinningLogo;
