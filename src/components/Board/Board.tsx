import React from "react";
import { useStateGame } from "../../contexts/StateGameContext";
import { BoardItemStyled, BoardStyled } from "../../styled/BoardStyled";
import { PlayerCurrStyled } from "./BoardStyled";
import { BoardType } from "../../../types/StateGameTypes";

export function Board() {
  const refBoard = React.useRef<HTMLDivElement | null>(null);
  const {
    handleMakeMove,
    currentPlayer,
    getPlayer,
    getBoard,
    handleCheckPositionEmpty,
  } = useStateGame();
  const player = getPlayer!(currentPlayer!());
  const board = getBoard!();

  React.useEffect(() => {
    refBoard.current?.classList.remove("loading");
  }, [board]);

  const handleClick = (position: unknown) => {
    if (handleCheckPositionEmpty!(position as keyof BoardType)) {
      refBoard.current?.classList.add("loading");
      handleMakeMove!(position as keyof BoardType, player);
    }
  };

  return (
    <>
      <PlayerCurrStyled>
        Player's Turn: <strong>{player}</strong>
      </PlayerCurrStyled>
      <BoardStyled ref={refBoard}>
        {Object.entries(board).map(item => (
          <BoardItemStyled
            key={item[0]}
            onClick={() => {
              handleClick(item[0]);
            }}
          >
            {item[1]}
          </BoardItemStyled>
        ))}
      </BoardStyled>
    </>
  );
}
