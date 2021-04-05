import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router";

type NavItem = {
  name: string;
  href: string;
};

const useStyles = makeStyles((theme) => ({
  navigation: {
    marginLeft: "auto",
    marginRight: "10vw",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  button: {
    color: "white",
    fontSize: "1.2rem",
    padding: theme.spacing(1, 3),
    borderRadius: 0,
  },

  active: {
    borderBottom: "4px solid #4a50cb",
  },
}));

const navItems: Array<NavItem> = [
  {
    name: "store",
    href: "/insight",
  },
  {
    name: "sign in",
    href: "/signin",
  },
  {
    name: "register",
    href: "/register",
  },
];

export function Navigation() {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <nav className={classes.navigation}>
      {navItems.map((item) => (
        <Button
          key={item.name}
          size="large"
          href={item.href}
          className={classnames(
            classes.button,
            pathname === item.href && classes.active
          )}
        >
          {item.name}
        </Button>
      ))}
    </nav>
  );
}
