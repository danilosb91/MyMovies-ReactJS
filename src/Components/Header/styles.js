import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 144px;


  display: flex;
    justify-content: center;

  border-bottom: 1px solid;
  border-bottom-color: #3e3b47;

  > div {
    width: 1120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }

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
