import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Navigation } from "./Navigation";

const useStyles = makeStyles(() => ({
  appBar: {
    flexGrow: 1,
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "white",
  },
}));

export function Masthead() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo />
        <Search />
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}
