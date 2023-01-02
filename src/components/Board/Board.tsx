import { BoardItemStyled, BoardStyled } from "../../styled/BoardStyled";

export function Board() {
  return (
    <BoardStyled>
      {Array(9)
        .fill(1)
        .map((e, i) => (
          <BoardItemStyled key={i} />
        ))}
    </BoardStyled>
  );
}
