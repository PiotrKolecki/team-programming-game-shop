import { makeStyles } from "@material-ui/core/styles";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";
import { theme as appTheme } from "../../constants";

const useStyles = makeStyles(theme => ({
  inputRoot: {
    width: "100%",
    color: "inherit",
  },
  inputInput: {
    border: "1px solid transparent",
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 1),
    background: appTheme.colors.inputBackground,
    width: "100%",
    height: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export function Input(props: InputBaseProps) {
  const classes = useStyles();

  return (
    <InputBase
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      {...props}
    />
  );
}
