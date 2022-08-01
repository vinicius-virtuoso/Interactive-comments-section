import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --Moderate-blue: hsl(238, 40%, 52%);
    --Soft-red: hsl(358, 79%, 66%);
    --Light-grayish-blue: hsl(239, 57%, 85%);
    --Pale-red: hsl(357, 100%, 86%);

    /* ### Neutral */

    --Dark-blue: hsl(212, 24%, 26%);
    --Grayish-Blue: hsl(211, 10%, 45%);
    --Light-gray: hsl(223, 19%, 93%);
    --Very-light-gray: hsl(228, 33%, 97%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  button,
  select {
    font-family: "Rubik", sans-serif;
  }
  body {
    background-color: var(--Light-gray);
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
  .box {
    min-height: 100vh;
  }
  .attribution {
    font-size: 11px;
    text-align: center;
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
`}
`;

export default GlobalStyle;
