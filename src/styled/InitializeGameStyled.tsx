import styled from "styled-components";

export const ButtonStartGame = styled.button`
  outline: none;
  box-shadow: none;
  padding: 1.75rem 1rem;
  min-width: 350px;
  border: 2px solid white;
  background: none;
  color: white;
  border-radius: 10rem;
  font-weight: 500;
  font-size: 1.5rem;
  box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: red;
    background-color: red;
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;
