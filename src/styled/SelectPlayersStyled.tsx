import styled from "styled-components";

export const LabelSelect = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;

export const WrapperCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  max-height: 500px;
  margin: 1.25rem 0 1rem;
  overflow: hidden auto;
  justify-content: center;
  align-items: center;
  position: relative;

  input[type="radio"] {
    pointer-events: none;
    width: 0;
    height: 0;
    opacity: 0;

    &:checked + label {
      background: lightblue;
      border-color: blue !important;
    }
  }
`;

export const Character = styled.label`
  width: 90px;
  height: 90px;
  line-height: 100px;
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border: 5px solid transparent;
  background: transparent;
  transition: all 0.1s;

  &:hover {
    border-color: blue;
  }
`;
