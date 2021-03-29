import { FormProps } from "./Form/Form";

type WelcomeType = "sign in" | "register";

export type Props = {
  type: WelcomeType;
};

const signInFooter = {
  title: "Are you a new customer?",
  label: "register",
  href: "/register",
};

const registerFooter = {
  title: "Already have an account?",
  label: "log in",
  href: "/login",
};

const signInElements: FormProps["formElements"] = [
  {
    label: "email",
  },
  {
    label: "password",
    inputProps: {
      type: "password",
    },
  },
];

const registerElements: FormProps["formElements"] = [
  {
    label: "email",
  },
  {
    label: "password",
    inputProps: {
      type: "password",
    },
  },
  {
    label: "repeat password",
    inputProps: {
      type: "password",
    },
  },
];

export const mapTypeToFormProps = (type: WelcomeType): FormProps => ({
  submitTitle: type,
  formElements: type === "sign in" ? signInElements : registerElements,
  footer: type === "sign in" ? signInFooter : registerFooter,
});
