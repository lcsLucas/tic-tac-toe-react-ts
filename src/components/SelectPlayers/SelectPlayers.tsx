import {
  Character,
  LabelSelect,
  WrapperCharacters,
} from "../../styled/SelectPlayersStyled";
import { useStateGame } from "../../contexts/StateGameContext";
import emojis from "../../utils/emojis";
import React from "react";
import { ButtonStartGame } from "../../styled/InitializeGameStyled";

export function SelectPlayers() {
  const { provider, handleChangePlayers, handleChangeStateGame } =
    useStateGame();
  const selected = !provider.players[0].length ? 0 : 1;

  const refSelected = React.useRef<string>("");
  const refButtonSelected = React.useRef<HTMLButtonElement | null>(null);

  const changeCharacter = (event: "set" | "reset") => {
    if (event === "set") {
      refButtonSelected.current!.style.opacity = "1";
      refButtonSelected.current!.innerHTML = `Confirm Player ${selected + 1}: ${
        refSelected.current
      }`;
    } else {
      refSelected.current = "";
      refButtonSelected.current!.style.opacity = "0";
      refButtonSelected.current!.innerHTML = ``;
      (
        document.querySelector(
          '.list-characters input[type="radio"]:checked'
        )! as HTMLInputElement
      ).checked = false;
    }
  };

  const handleChangeSelectedCharacter = () => {
    handleChangePlayers!(selected, refSelected.current);

    if (selected === 0) {
      changeCharacter("reset");
    } else {
      handleChangeStateGame!(2);
    }
  };

  const handleChangeCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    refSelected.current = e.target.value;
    changeCharacter("set");
  };

  return (
    <>
      {selected >= 0 && (
        <LabelSelect>
          {!provider.players[0].length
            ? "Select Player 1"
            : `Selected Player 1: ${provider.players[0]}`}
        </LabelSelect>
      )}
      {selected >= 1 && <LabelSelect>Select Player 2:</LabelSelect>}
      <WrapperCharacters className="list-characters">
        {emojis.map((e, i) => (
          <React.Fragment key={`${e}-${i}`}>
            <input
              id={e}
              value={e}
              type="radio"
              name="character"
              onChange={handleChangeCharacter}
            />
            <Character htmlFor={e} key={i}>
              {e}
            </Character>
          </React.Fragment>
        ))}
      </WrapperCharacters>
      <ButtonStartGame
        onClick={handleChangeSelectedCharacter}
        ref={refButtonSelected}
        style={{ marginTop: "2.5rem", opacity: 0 }}
      ></ButtonStartGame>
    </>
  );
}
