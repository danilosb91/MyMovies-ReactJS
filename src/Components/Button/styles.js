import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
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
