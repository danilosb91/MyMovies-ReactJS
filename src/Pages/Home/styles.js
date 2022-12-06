import styled from "styled-components";
export const Container = styled.div``;

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 123px;
  align-items: center;

  > h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Content = styled.div`
  max-width: 1137px;

`;
