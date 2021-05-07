import React from "react";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Input } from "../../../components";
import { Form as FinalForm, Field, FieldProps } from "react-final-form";
import { theme as appTheme } from "../../../constants";
import { WelcomeType } from "../utils";
import {
  fetchUserRequest,
  registerUserRequest,
} from "../../../store/user/actions";

type FooterProps = {
  label: string;
  title: string;
  href: string;
};

type InputProps = Pick<FieldProps<any, any>, "validate"> & {
  label: string;
  inputProps?: React.ComponentProps<typeof Input>;
};

export type FormProps = {
  submitTitle: WelcomeType;
  footer: FooterProps;
  formElements: Array<InputProps>;
};

const useStyles = makeStyles((theme) => ({
  label: {
    color: "inherit",
    textTransform: "uppercase",
    fontSize: "1rem",
  },
  error: {
    "& input": {
      border: `1px solid ${appTheme.colors.guardsmanRed}`,
    },
  },
  errorInfo: {
    ...theme.typography.body2,
    color: appTheme.colors.guardsmanRed,
    position: "absolute",
    right: 8,
  },
  submit: {
    color: "inherit",
    backgroundColor: appTheme.colors.darkOrchid,
    boxShadow: "none",
    height: theme.spacing(6),
    margin: theme.spacing(4, 1, 0, 1),
    "&:hover": {
      backgroundColor: appTheme.colors.lilac,
    },
    "&:disabled": {
      color: appTheme.colors.stone,
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
  gridItem: {
    position: "relative",
  },
}));

const validator = (elements: Array<InputProps>) => (
  values: Record<string, any>
) => {
  const errors: Record<string, string> = {};
  elements.forEach(({ label }) => {
    if (!values[label]) {
      errors[label] = "Required";
    } else if (
      label === "email" &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values[label].toLowerCase()
      )
    ) {
      errors[label] = "Must be a mail";
    } else if (
      label === "repeat password" &&
      values[label] !== values["password"]
    ) {
      errors[label] = "Must match";
    }
  });
  return errors;
};

export function Form({ submitTitle, footer, formElements }: FormProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <FinalForm
      onSubmit={(payload) => {
        submitTitle === "sign in"
          ? dispatch(
              fetchUserRequest({
                login: payload.email,
                password: payload.password,
              })
            )
          : dispatch(
              registerUserRequest({
                mail: payload.email,
                password: payload.password,
                userType: "Customer",
              })
            );
      }}
      validate={validator(formElements)}
      render={({ handleSubmit, pristine, submitting, hasValidationErrors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {formElements.map(({ label, inputProps, validate }) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  key={label}
                  className={classes.gridItem}
                >
                  <Field name={label} validate={validate}>
                    {({ input, meta }) => (
                      <>
                        <label className={classes.label}>{label}</label>
                        {meta.touched && meta.error && (
                          <span className={classes.errorInfo}>
                            {meta.error}
                          </span>
                        )}
                        <Input
                          {...input}
                          {...inputProps}
                          className={classnames(
                            meta.error && meta.touched && classes.error
                          )}
                        />
                      </>
                    )}
                  </Field>
                </Grid>
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={submitting || pristine || hasValidationErrors}
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
        );
      }}
    />
  );
}
