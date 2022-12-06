import { Container, Title, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Movie } from "../../Components/Movie";

import { Button } from "../../Components/Button";

import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Title>
        <h2>Meus Filmes</h2>
        <Button icon={FiPlus} title="Adicionar filme"></Button>
      </Title>
      <Content>
        <Movie
          data={{
            title: 'Happy Potter',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
            rating: '3',
            tags: [
              { id: "1", name: "Drama" },
              { id: "2", name: "Ficção" },
              { id: "3", name: "Familia" },

            ],
          }}
        />
      </Content>
    </Container>
  );
}
