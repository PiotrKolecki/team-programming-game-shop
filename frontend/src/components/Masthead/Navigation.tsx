import { useState } from "react";
import classnames from "classnames";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useLocation } from "react-router";
import { theme as appTheme } from "../../constants";

type NavItem = {
  name: string;
  href: string;
};

const StyledMenu = withStyles({
  paper: {
    background: appTheme.colors.tundora,
  },
})((props: MenuProps) => <Menu {...props} />);

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
  mobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuItem: {
    textTransform: "uppercase",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
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
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <StyledMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      {navItems.map((item) => (
        <MenuItem key={item.name} className={classes.menuItem}>
          <a href={item.href}>{item.name}</a>
        </MenuItem>
      ))}
    </StyledMenu>
  );

  return (
    <>
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
      <nav className={classes.mobile}>
        <Button
          key="more"
          size="large"
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          className={classnames(classes.button)}
        >
          <MoreIcon />
        </Button>
      </nav>
      {renderMobileMenu}
    </>
  );
}
