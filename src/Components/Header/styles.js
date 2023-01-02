import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  border-bottom: 1px solid;
  border-bottom-color: #3e3b47;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;
export const Search = styled.div`
  width: 630px;
  
  /* margin: 0 60px; */
`;
