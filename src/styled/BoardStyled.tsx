import styled from "styled-components";

export const BoardStyled = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 1;
  transition: all 0.25s;

  &.loading {
    opacity: 0.35;
    cursor: wait;

    * {
      pointer-events: none;
    }
  }
`;

export const BoardItemStyled = styled.div`
  cursor: pointer;
  aspect-ratio: 1;
  position: relative;
  width: 33.3333%;
  transition: all 0.15s;

  &::before {
    content: "";
    width: 2px;
    height: 100%;
    right: -1px;
    top: 0;
    position: absolute;
  }

  &::after {
    content: "";
    width: calc(100% + 1px);
    height: 2px;
    left: 0;
    bottom: -1px;
    position: absolute;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(7),
  &:nth-child(8) {
    &::before {
      background: linear-gradient(45deg, white, transparent 100%);
    }
  }

  &:nth-child(7),
  &:nth-child(8) {
    &::before {
      background: linear-gradient(45deg, transparent, white 100%);
    }
  }

  &:nth-child(4),
  &:nth-child(5) {
    &::before {
      background: white;
    }
  }

  &:nth-child(1),
  &:nth-child(4) {
    &::after {
      background: linear-gradient(45deg, transparent, white 100%);
    }
  }

  &:nth-child(6),
  &:nth-child(3) {
    &::after {
      background: linear-gradient(45deg, white, transparent 100%);
    }
  }

  &:nth-child(2),
  &:nth-child(5) {
    &::after {
      background: white;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
