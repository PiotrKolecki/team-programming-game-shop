import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "../Input";
import { theme as appTheme } from "../../constants";
import { searchSet } from '../../store/search/index';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    background: appTheme.colors.inputBackground,
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.3, 1, 1.3, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export function Search() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const search = (event: any) => {
    dispatch(searchSet({ searchTerm: event.target.value }));
  }

  const redirect = (event: any) => {
    if(!pathname.includes('insight') && event.key === "Enter"){
      history.push('/insight/all')
    }
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Input
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={search}
        onKeyDown={redirect}
      />
    </div>
  );
}
