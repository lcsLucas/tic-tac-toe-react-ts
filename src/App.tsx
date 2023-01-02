import Board from "./components/Board";
import { GlobalStylesApp, Title } from "./styled/App.Styled";

export default function App() {
  return (
    <>
      <GlobalStylesApp />
      <Title>Tic-Tac-Toe</Title>
      <Board />
    </>
  );
}
