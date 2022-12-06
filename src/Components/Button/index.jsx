import { Container} from "./styles";


export function Button({title, loading = false, icon: Icon, ...rest}) {
  return (
    <Container type="button" disable={loading}>
        {Icon && <Icon size={20} />}
        { title }

    </Container>
  );
}
