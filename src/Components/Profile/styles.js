import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    
  
   strong{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px ;
  }

   span{
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px ;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    cursor: pointer;
    
  }
  svg{
    margin-left: 9px;
  }
}
  > img {
    border-radius: 50%;
    height: auto;
    width: 64px;
  }
`;
