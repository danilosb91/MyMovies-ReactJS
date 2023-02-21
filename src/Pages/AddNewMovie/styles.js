import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
`;

export const Back = styled.div`
  padding: 40px 0;
`;

export const Form = styled.form`
  max-width: 1120px;
  margin: 38px auto;
  > div {
    display: flex;
    gap: 20px;
    margin: 40px 0;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > textarea {
    width: 100%;
    height: 274px;

    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.INPUT};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    border-radius: 10px;
    margin-bottom: 8px;
    padding: 12px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }
  }
`;
