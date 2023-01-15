import { Container } from "./styles";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <div>
      <Link to="/UserProfile">
      
        <strong>Danilo Barão</strong>
      </Link>
        
       
      
    <span>
          Sair
          <FiLogOut />
        </span>
      </div>
    <img src="http://github.com/danilosb91.png"/>
    </Container>
  );
}
