import {
  StateGameContextType,
  AvailableStatesGame,
  StateGameProps,
  StateGameType,
} from "../../types/StateGameTypes";
import React from "react";

const _initializedObjStateGame: StateGameType = {
  state: AvailableStatesGame.Uninitialized_Game,
  moves: [],
  players: ["", ""],
};

export const StateGameContext = React.createContext<StateGameContextType>({
  provider: _initializedObjStateGame,
  handleChangeStateGame: () => {},
  handleChangePlayers: () => {},
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

  return (
    <StateGameContext.Provider
      value={{ provider, handleChangeStateGame, handleChangePlayers }}
    >
      {children}
    </StateGameContext.Provider>
  );
};

export const useStateGame = () => React.useContext(StateGameContext);
