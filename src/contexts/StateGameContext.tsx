import React from "react";

import {
  StateGameContextType,
  AvailableStatesGame,
  StateGameProps,
  StateGameType,
  PlayerType,
  BoardType,
  PossibilityWinning,
  TuplePossibilityWinning,
} from "../../types/StateGameTypes";

const _initializedObjStateGame: StateGameType = {
  state: AvailableStatesGame.Uninitialized_Game,
  board: [false, false, false, false, false, false, false, false, false],
  moves: [],
  players: ["", ""],
};

export const StateGameContext = React.createContext<StateGameContextType>({
  provider: _initializedObjStateGame,
});

export const StateGameProvider = ({ children }: StateGameProps) => {
  const [provider, setProvider] = React.useState<StateGameType>(
    _initializedObjStateGame
  );

  const handleChangeStateGame = (
    newState: typeof AvailableStatesGame[keyof typeof AvailableStatesGame]
  ) => {
    setProvider(oV => ({
      ...oV,
      state: newState,
    }));
  };

  const handleChangePlayers = (index: 0 | 1, player: string) => {
    setProvider(oV => {
      const spredPlayers = { ...oV.players };
      spredPlayers[index] = player;

      return {
        ...oV,
        players: spredPlayers,
      };
    });
  };

  const handleMakeMove = (position: keyof BoardType, player: PlayerType) => {
    setProvider(v => {
      const newV = {
        ...v,
        board: {
          ...v.board,
          [position]: player,
        },
        moves: [
          ...v.moves,
          {
            player,
            position,
          },
        ],
      };

      const winning_move = handleCheckWinner(newV.board);

      if (winning_move) {
        return {
          ...newV,
          winner: {
            player,
            move: winning_move,
          },
          state: AvailableStatesGame.Finished_Game,
        };
      }

      if (handleCheckFinishGame(newV.board)) {
        return {
          ...newV,
          state: AvailableStatesGame.Finished_Game,
        };
      }

      return newV;
    });
  };

  const handleCheckFinishGame = (board: BoardType) => {
    return Object.values(board).reduce(
      (prev, cur) => (!cur ? cur : prev),
      true
    );
  };

  const handleCheckWinner = (board: BoardType) => {
    let has_winner: TuplePossibilityWinning | null = null;
    let i = 0;

    while (i < PossibilityWinning.length && !has_winner) {
      const currentPossibility = PossibilityWinning[i];

      const result = [...currentPossibility].reduce(
        (prev: any, cur: unknown) => {
          return [...prev, board[cur as keyof BoardType]];
        },
        []
      );

      const stat_check_winner =
        !!result[0] && result[0] === result[1] && result[0] === result[2];

      if (stat_check_winner) has_winner = currentPossibility;

      i++;
    }

    return has_winner;
  };

  const handleCheckPositionEmpty = (position: keyof BoardType) => {
    return !provider.board[position];
  };

  const currentPlayer = () =>
    !provider.moves.length ||
    provider.moves[provider.moves.length - 1].player === provider.players[1]
      ? 0
      : 1;

  const getPlayer = (player: 0 | 1) => provider.players[player];

  const getBoard = () => provider.board;

  return (
    <StateGameContext.Provider
      value={{
        provider,
        handleChangeStateGame,
        handleCheckPositionEmpty,
        handleChangePlayers,
        handleMakeMove,
        currentPlayer,
        getPlayer,
        getBoard,
      }}
    >
      {children}
    </StateGameContext.Provider>
  );
};

export const useStateGame = () => React.useContext(StateGameContext);
