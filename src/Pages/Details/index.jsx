import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../Components/Section";
import { Movie } from "../../Components/Movie";

export function Details() {
  return (
    <Container>
      <Header />
      <Section>
      <Movie
            data={{
              title: "Happy Potteeer",
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
    </Container>
  );
}
