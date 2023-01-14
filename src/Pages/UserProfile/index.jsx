import { Container, Form, Avatar, Label } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

export function UserProfile() {
  return (
    <Container>
  
      <header>
        <div>
        <a href="#">
          <FiArrowLeft />
          Voltar         
        </a>
        </div>
 
      </header>
      <Form>
        <Avatar>
          <img src="http://github.com/danilosb91.png" />
          <Label>
            <FiCamera />
            <input id="avatar" type="file" />
          </Label>
        </Avatar>
        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />

        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova senha" />

        <Button title="Salvar" />
      </Form>
    
    </Container>
  );
}
