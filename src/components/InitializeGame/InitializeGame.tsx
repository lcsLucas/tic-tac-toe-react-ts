import { useStateGame } from "../../contexts/StateGameContext";
import { ButtonStartGame } from "../../styled/InitializeGameStyled";

export default function InitializeGame() {
  const { handleChangeStateGame } = useStateGame();

  const handleClickStart = () => {
    handleChangeStateGame!(1);
  };

  return (
    <ButtonStartGame onClick={handleClickStart}>Start Game</ButtonStartGame>
  );
}
