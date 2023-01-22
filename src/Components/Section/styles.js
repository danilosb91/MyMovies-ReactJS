import styled from "styled-components";


export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }

  > div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: auto;
    height: 70vh;
  }
`;

export const Title = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  > div:nth-child(2) {
    width: 207px;
  }
`;
