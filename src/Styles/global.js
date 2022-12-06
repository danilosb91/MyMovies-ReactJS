import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        font-weight: 400;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transform: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ff859b #312e38;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #312e38;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff859b;
    border-radius: 10px;
    border: 0px none #ffffff;
  }

`;
