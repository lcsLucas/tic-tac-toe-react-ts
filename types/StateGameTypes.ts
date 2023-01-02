export const AvailableStatesGame = {
  Uninitialized_Game: 0,
  SelectingPlayers: 1,
  Playing_Game: 2,
  Finished_Game: 3,
} as const;

type PlayerType = string;

type PositionType = number;

type MovesType = {
  player: PlayerType;
  position: PositionType;
}[];

export type StateGameType = {
  state: typeof AvailableStatesGame[keyof typeof AvailableStatesGame];
  moves: MovesType;
  players: {
    [0]: PlayerType;
    [1]: PlayerType;
  };
};

export type StateGameContextType = {
  provider: StateGameType;
  handleChangeStateGame: (
    newState: typeof AvailableStatesGame[keyof typeof AvailableStatesGame]
  ) => void;
  handleChangePlayers: (index: 0 | 1, player: string) => void;
};

export type StateGameProps = { children: React.ReactNode };

export type MapStateGameType<T> = {
  [key in typeof AvailableStatesGame[keyof typeof AvailableStatesGame]]: T;
};

export type StepsGameType = {
  description: string;
  component: React.ReactNode;
};

export type CharacterType = {
  active: boolean;
};
