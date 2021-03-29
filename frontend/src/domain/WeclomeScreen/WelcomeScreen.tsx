import styled from "styled-components";
import { Modal, Form } from "./Form";
import { Welcome } from "./Welcome/Welcome";
import { Props, mapTypeToFormProps } from "./utils";
import { theme } from "../../constants";

const Purple = styled.div`
  padding-left: 0.5rem;
  color: ${theme.colors.mediumOrchid};
`;

export function WelcomeScreen({ type }: Props) {
  return (
    <section>
      <Welcome />
      <Modal
        title={
          type === "sign in" ? (
            <>
              sign <Purple>in</Purple>
            </>
          ) : (
            <>register</>
          )
        }
      >
        <Form {...mapTypeToFormProps(type)} />
      </Modal>
    </section>
  );
}
