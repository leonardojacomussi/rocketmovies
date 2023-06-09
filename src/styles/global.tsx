import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.WHITE_800};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    outline: none;
  };

  a {
    text-decoration: none;
  };

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover {
    filter: brightness(.9);
  };

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  };

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.PINK_900};
  };

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK_800};
    border-radius: 8px;
  };
`;