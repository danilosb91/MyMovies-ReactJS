import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px auto;
  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;
export const Search = styled.div`
  width: 630px;
  margin: 0 60px;
`;
