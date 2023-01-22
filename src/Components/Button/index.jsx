import { Container} from "./styles";




export function Button({title, to, loading = false, icon: Icon, ...rest}) {
  return (
    <Container type="button" to={to} disable={loading}>
        {Icon && <Icon size={20} />}
        { title }

    </Container>
  );
}
