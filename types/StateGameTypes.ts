export const AvailableStatesGame = {
  Uninitialized_Game: 0,
  SelectingPlayers: 1,
  Playing_Game: 2,
  Finished_Game: 3,
} as const;

export type TuplePossibilityWinning = [number, number, number];

export const PossibilityWinning: TuplePossibilityWinning[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type PlayerType = string;

type PlayersType = {
  [0]: PlayerType;
  [1]: PlayerType;
};

type PositionType = number;

type MovesType = {
  player: PlayerType;
  position: PositionType;
}[];

export type BoardType = {
  0: boolean;
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
  7: boolean;
  8: boolean;
};

export type StateGameType = {
  state: typeof AvailableStatesGame[keyof typeof AvailableStatesGame];
  board: BoardType;
  moves: MovesType;
  players: PlayersType;
  winner?: {
    player: PlayerType;
    move: TuplePossibilityWinning;
  };
};

export type StateGameContextType = {
  provider: StateGameType;
  handleChangeStateGame?: (
    newState: typeof AvailableStatesGame[keyof typeof AvailableStatesGame]
  ) => void;
  handleChangePlayers?: (index: 0 | 1, player: PlayerType) => void;
  handleMakeMove?: (position: keyof BoardType, player: PlayerType) => void;
  handleCheckPositionEmpty?: (position: keyof BoardType) => boolean;
  currentPlayer?: () => 0 | 1;
  getPlayer?: (player: 0 | 1) => PlayerType;
  getBoard?: () => BoardType;
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
