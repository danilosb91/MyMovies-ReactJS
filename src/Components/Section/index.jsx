import { Button } from "../Button";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Button icon={FiPlus} title="Adicionar filme"></Button>
      {children}
    </Container>
  );
}
