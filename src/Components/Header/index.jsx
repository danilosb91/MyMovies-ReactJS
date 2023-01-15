import { Container, Search } from "./styles";
import { FiSearch } from "react-icons/fi";

import { Input } from "../../Components/Input";
import { Profile } from "../../Components/Profile";


export function Header() {
  return (
    <Container>
      <div>

      <h1>MyMovies</h1>
      <Search>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" />

      </Search>


      <Profile>
   
      </Profile>
        
      </div>

    </Container>
  );
}
