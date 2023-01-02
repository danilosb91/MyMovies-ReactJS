import { Button } from "../Button";
import { Container, Title } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Section({ title, children }) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>

        <Button icon={FiPlus} title="Adicionar filme"></Button>
      </Title>
      <div>{children}</div>
    </Container>
  );
}
