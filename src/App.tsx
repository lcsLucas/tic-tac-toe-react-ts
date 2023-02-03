import { MapStateGameType, StepsGameType } from "../types/StateGameTypes";
import Board from "./components/Board";
import InitializeGame from "./components/InitializeGame/InitializeGame";
import ResultGame from "./components/ResultGame";
import SelectPlayers from "./components/SelectPlayers";
import { useStateGame } from "./contexts/StateGameContext";
import {
  GlobalStylesApp,
  HeaderGame,
  SubTitle,
  Title,
} from "./styled/AppStyled";

export default function App() {
  const { provider } = useStateGame();

  const steps: MapStateGameType<StepsGameType> = {
    "0": {
      description: "[New Game]",
      component: <InitializeGame />,
    },
    "1": {
      description: "[Selecting Players...]",
      component: <SelectPlayers />,
    },
    "2": {
      description: "[Playing Game]",
      component: <Board />,
    },
    "3": {
      description: "[Game Over]",
      component: <ResultGame />,
    },
  };

  return (
    <>
      <GlobalStylesApp />
      <HeaderGame>
        <Title>Tic Tac Toe</Title>
        <SubTitle>{steps[provider.state].description}</SubTitle>
      </HeaderGame>

      {steps[provider.state].component}
    </>
  );
}
