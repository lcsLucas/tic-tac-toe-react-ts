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
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`;

export const HeaderGame = styled.div`
  position: absolute;
  top: 2.5rem;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.65rem;
  line-height: 1.5;
  margin: 0 0 0.25rem;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.25rem;
  line-height: 1.5;
  margin: 0;
`;
