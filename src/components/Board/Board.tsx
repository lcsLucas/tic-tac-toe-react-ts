import React from "react";
import { useStateGame } from "../../contexts/StateGameContext";
import { BoardItemStyled, BoardStyled } from "../../styled/BoardStyled";
import { PlayerCurrStyled } from "./BoardStyled";

export function Board() {
  const refBoard = React.useRef<HTMLDivElement | null>(null);
  const { handleMakeMove, currentPlayer, getPlayer, getBoard } = useStateGame();
  const player = getPlayer!(currentPlayer!());
  const board = getBoard!();

  React.useEffect(() => {
    refBoard.current?.classList.remove("loading");
  }, [board]);

  const handleClick = () => {
    refBoard.current?.classList.add("loading");
    handleMakeMove();
  };

  return (
    <>
      <PlayerCurrStyled>
        Player's Turn: <strong>{player}</strong>
      </PlayerCurrStyled>
      <BoardStyled ref={refBoard}>
        {board.map((e, i) => (
          <BoardItemStyled key={i} onClick={handleClick} />
        ))}
      </BoardStyled>
    </>
  );
}
