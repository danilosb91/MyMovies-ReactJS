import styled from "styled-components";
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  gap: 8px; ;


`;
