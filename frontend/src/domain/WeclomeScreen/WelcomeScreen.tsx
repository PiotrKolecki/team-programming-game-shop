import { Modal, Form } from "./Form";
import { Welcome } from "./Welcome/Welcome";
import { Props, mapTypeToFormProps, mapTypeToTitle } from "./utils";

export function WelcomeScreen({ type }: Props) {
  return (
    <section>
      <Welcome />
      <Modal title={mapTypeToTitle(type)}>
        <Form {...mapTypeToFormProps(type)} />
      </Modal>
    </section>
  );
}
