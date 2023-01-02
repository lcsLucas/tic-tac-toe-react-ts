import { BoardItemStyled, BoardStyled } from "../../styled/Board.Styled";

export function Board() {
  return (
    <BoardStyled>
      {Array(9)
        .fill(1)
        .map(() => (
          <BoardItemStyled />
        ))}
    </BoardStyled>
  );
}
