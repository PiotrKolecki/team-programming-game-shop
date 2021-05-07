import styled from "styled-components";
import { theme } from "../../constants";
import { FormProps } from "./Form/Form";

type WelcomeType = "sign in" | "register";

export type Props = {
  type: WelcomeType;
};

const SIGN_IN_FOOTER = {
  title: "Are you a new customer?",
  label: "register",
  href: "/register",
} as const;

const REGISTER_FOOTER = {
  title: "Already have an account?",
  label: "log in",
  href: "/login",
} as const;

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

const Purple = styled.div`
  padding-left: 0.5rem;
  color: ${theme.colors.mediumOrchid};
`;

export const mapTypeToFormProps = (type: WelcomeType): FormProps => ({
  submitTitle: type,
  formElements: type === "sign in" ? signInElements : registerElements,
  footer: type === "sign in" ? SIGN_IN_FOOTER : REGISTER_FOOTER,
});

export const mapTypeToTitle = (type: Props["type"]) => {
  return type === "sign in" ? (
    <>
      sign <Purple>in</Purple>
    </>
  ) : (
    <>register</>
  );
};
