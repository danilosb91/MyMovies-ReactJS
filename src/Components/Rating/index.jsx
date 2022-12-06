import { Container} from "./styles";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating({rating}) {
    const activeStars = parseInt(rating);
    console.log(activeStars)

  return (
    <Container>
        {[...new Array(5)].map((arr, index) => {
            return index < activeStars ? <AiFillStar/> : <AiOutlineStar/>;
        })}
    </Container>
  );
}
