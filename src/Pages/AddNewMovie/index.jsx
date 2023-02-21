import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiTrash2, FiSave } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function AddNewMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Back>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </Back>
        <main>
          <Form>
            <header>

            <h1>Novo Filme</h1>

            </header>
            <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />

            </div>
            <textarea placeholder="Observações" />

            <p>Marcadores</p>
            <div>
              <div>React</div>
              <div>Novo Marcador</div>
            </div>

            <Button icon={FiTrash2} title="Excluir filme"></Button>
            <Button icon={FiSave} title="Salvar Alterações"></Button>
          </Form>
        </main>
      </Content>
    </Container>
  );
}
