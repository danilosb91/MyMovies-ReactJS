import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;


    padding-left: 144px;

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.ROSE};
      display: flex;
      align-items: center;
      gap: 8px;
    }

    background: #382d32;
  }
`;

export const Form = styled.div`
  width: 340px;

  > div:nth-child(2n + 1) {
    margin-bottom: 24px;
  }

  margin: 0 auto;
`;
export const Avatar = styled.div`
  position: relative;
  margin: -80px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;

export const Label = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  bottom: 5px;
  right: 5px;

  > input {
    display: none;
  }

  background-color: ${({ theme }) => theme.COLORS.ROSE};
`;
