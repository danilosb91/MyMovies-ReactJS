import { Button } from "../Button";
import { Container, Title } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Section({ title, children }) {
  return (
    <Container>
      <Title>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <Button icon={FiPlus} title="Adicionar filme"></Button>
        </div>
      </Title>
      <div>{children}</div>
    </Container>
  );
}
