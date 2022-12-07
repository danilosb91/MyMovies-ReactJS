import { Container } from "./styles";
import { Tags } from "../Tags";
import { Rating } from "../Rating";

export function Movie({ data, ...rest }) {
  console.log(data)
  return (
    <Container {...rest}>
      <h1>{data.title} </h1>
      <Rating rating={data.rating}/>
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tags key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
