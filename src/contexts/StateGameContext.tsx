import {
  StateGameContextType,
  AvailableStatesGame,
  StateGameProps,
  StateGameType,
} from "../../types/StateGameTypes";
import React from "react";

const _initializedObjStateGame: StateGameType = {
  state: AvailableStatesGame.Uninitialized_Game,
  board: [false, false, false, false, false, false, false, false, false],
  moves: [],
  players: ["", ""],
};

export const StateGameContext = React.createContext<StateGameContextType>({
  provider: _initializedObjStateGame,
  handleChangeStateGame: () => {},
  handleChangePlayers: () => {},
  handleMakeMove: () => {},
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

  const handleMakeMove = () => {
    setProvider(v => ({
      ...v,
      moves: [
        ...v.moves,
        {
          player: v.players[0],
          position: Math.random() * 10 + 1,
        },
      ],
    }));
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
