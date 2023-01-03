import { Container } from "./styles";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <div>
      
        <strong>Danilo Barão</strong>
        
       
        <span>
          Sair
          <FiLogOut />
        </span>
      </div>
    <img src="http://github.com/danilosb91.png"/>
  
    </Container>
  );
}
