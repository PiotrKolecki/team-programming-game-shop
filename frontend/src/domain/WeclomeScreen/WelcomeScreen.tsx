import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert } from "../../components";
import { Modal, Form } from "./Form";
import { Welcome } from "./Welcome/Welcome";
import { Props, mapTypeToFormProps, mapTypeToTitle } from "./utils";
import {
  getRegistrationSelector,
  getErrorSelector,
} from "../../store/user/selectors";

export function WelcomeScreen({ type }: Props) {
  const [isAlertVisible, setAlertVisibility] = useState(false);
  const registrationSuccess = useSelector(getRegistrationSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    if (registrationSuccess || error) {
      setAlertVisibility(true);
    }
  }, [registrationSuccess, error]);

  return (
    <section>
      {isAlertVisible && (
        <Alert
          type={error ? "error" : "success"}
          onClose={() => {
            setAlertVisibility(false);
          }}
          text={
            error
              ? "Oops! Something went wrong"
              : "Successful Registration, You can Log in now"
          }
        />
      )}
      <Welcome />
      <Modal title={mapTypeToTitle(type)}>
        <Form {...mapTypeToFormProps(type)} />
      </Modal>
    </section>
  );
}
