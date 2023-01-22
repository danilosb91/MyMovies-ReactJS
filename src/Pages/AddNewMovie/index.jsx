import { Container, Content, Back} from "./styles";
import {Header  } from "../../components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiTrash2,FiSave }  from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function AddNewMovie() {
  return (
    <Container>
      <Header/>
        <Content>
      <Back>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
      </Back>
        <h1>
          Novo Filme
        </h1>
        <Input placeholder="Título" />
        <Input placeholder="Sua nota (de 0 a 5)" />
        <Input placeholder="Observações" />
        
        <p>Marcadores</p>
        <div>
          <div>React</div>
          <div>Novo Marcador</div>
        </div>

        <Button icon={FiTrash2} title="Excluir filme"></Button>
        <Button icon={FiSave} title="Salvar Alterações"></Button>


        </Content>
    </Container>
  );
}
