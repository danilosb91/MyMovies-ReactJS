import { Container, Content } from "./styles";
import { Section } from "../../Components/Section";
import { Header } from "../../Components/Header";
import { Movie } from "../../Components/Movie";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus Filmes">
          <Movie
            data={{
              title: "Happy Potter",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
              rating: "3",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ficção" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Movie
            data={{
              title: "Happy Potter",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
              rating: "3",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ficção" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
            <Movie
            data={{
              title: "Happy Potter",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
              rating: "3",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ficção" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
               <Movie
            data={{
              title: "Happy Potter",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
              rating: "3",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ficção" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
         
         <Movie
            data={{
              title: "Happy Potter",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
            Possimus, nemo at autem, ex reprehenderit distinctio eum minus nesciunt 
            dignissimos veniam sequi reiciendis itaque exercitationem illum dolorem
            deleniti perferendis corporis amet`,
              rating: "3",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ficção" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
         
         
          
        </Section>
      </Content>
    </Container>
  );
}
