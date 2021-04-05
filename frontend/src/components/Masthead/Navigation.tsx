import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

  return (
    <nav className={classes.navigation}>
      {navItems.map((item) => (
        <Button
          key={item.name}
          size="large"
          href={item.href}
          className={classes.button}
        >
          {item.name}
        </Button>
      ))}
    </nav>
  );
}
