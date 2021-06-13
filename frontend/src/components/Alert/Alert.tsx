import MAlert from "@material-ui/lab/Alert";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      top: 0,
      left:0,
      zIndex: 1000,
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

type Props = {
  type: "success" | "error";
  text: string;
  onClose: () => void;
};

export function Alert({ text, onClose, type }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MAlert onClose={onClose} severity={type}>
        {text}
      </MAlert>
    </div>
  );
}
