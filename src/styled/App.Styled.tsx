import styled, { createGlobalStyle } from "styled-components";

export const GlobalStylesApp = createGlobalStyle`
html,
body,
#root {
    scroll-behavior: smooth;
    height: 100vh;
    overflow: hidden;
}

body {
    background: linear-gradient( -45deg, #bd34fe 30%, #41d1ff );
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  position: absolute;
  top: 0;
`;
