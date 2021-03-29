import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Input } from "../../../components";
import { Form as FinalForm, Field } from "react-final-form";
import { theme as appTheme } from "../../../constants";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "inherit",
    textTransform: "uppercase",
    fontSize: "1rem",
  },
  submit: {
    color: "inherit",
    backgroundColor: appTheme.colors.darkOrchid,
    boxShadow: "none",
    height: theme.spacing(6),
    margin: theme.spacing(4, 1, 0, 1),
    "&:hover": {
      backgroundColor: appTheme.colors.darkOrchid,
    },
  },
  register: {
    color: "inherit",
    borderColor: "white",
    height: theme.spacing(6),
    margin: theme.spacing(0, 1),
  },
  divider: {
    width: "100%",
    backgroundColor: appTheme.colors.ivory,
    margin: theme.spacing(2, 0),
  },
  newCustomer: {
    margin: theme.spacing(1, 1),
  },
}));

type FooterProps = {
  label: string;
  title: string;
  href: string;
};

type InputProps = {
  label: string;
  inputProps?: React.ComponentProps<typeof Input>;
};

export type FormProps = {
  submitTitle: string;
  footer: FooterProps;
  formElements: Array<InputProps>;
};

export function Form({ submitTitle, footer, formElements }: FormProps) {
  const classes = useStyles();

  return (
    <FinalForm
      onSubmit={console.log}
      render={({ handleSubmit, pristine, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {formElements.map(({ label, inputProps }) => (
              <Grid item xs={12} sm={12} key={label}>
                <Field name={label}>
                  {({ input }) => (
                    <>
                      <label className={classes.label}>{label}</label>
                      <Input {...input} {...inputProps} />
                    </>
                  )}
                </Field>
              </Grid>
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={submitting || pristine}
              className={classes.submit}
            >
              {submitTitle}
            </Button>
            <Divider className={classes.divider} variant="fullWidth" />
            <p className={classes.newCustomer}>{footer.title}</p>
            <Button
              fullWidth
              href={footer.href}
              variant="outlined"
              className={classes.register}
            >
              {footer.label}
            </Button>
          </Grid>
        </form>
      )}
    />
  );
}
