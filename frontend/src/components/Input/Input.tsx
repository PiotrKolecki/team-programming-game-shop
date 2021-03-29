import { makeStyles } from "@material-ui/core/styles";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    width: "100%",
    color: "inherit",
  },
  inputInput: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 1),
    background: "#FFFFFF39 0% 0% no-repeat padding-box",
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
