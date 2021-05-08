/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dice } from "./components/Dice";
import { Navbar } from "./components/Navbar";
import { 
  DicesGrid,
  MainContent,
  BoardContent,
  DiceSpace,
  ButtonsGrid,
  Instructions,
  RollButton,
  NewDiceButton,
  DeleteDiceButton 
} from "./assets/styles";

export const App = () => {
  const [turnFlag, setTurnFlag] = useState(false);
  const [dices, setDices] = useState([1]);

  const removeDice = () => {
    dices.pop();
    setDices((dices) => [...dices]);
  };

  return (
    <MainContent id='main-content'>
      <Navbar />
      <BoardContent>
        <ButtonsGrid>
          <RollButton onClick={() => setTurnFlag((turnFlag) => !turnFlag)}>
            Roll dice! 
          </RollButton>
          <NewDiceButton
            onClick={() => setDices((dices) => [...dices, dices.length + 1])}
          >
            New dice
          </NewDiceButton>
          {
            dices.length > 1 ? (
              <DeleteDiceButton onClick={removeDice}>Remove Dice</DeleteDiceButton>
            ) : ''
          }
          <Instructions>
          If you want change number of faces in dice, just press the small dice that be in side of each biggest dice
        </Instructions>
        </ButtonsGrid>
        <DicesGrid>
          {dices.map((dice) => (
            <DiceSpace>
              <Dice key={dice} turnFlag={turnFlag} />
            </DiceSpace>

          ))}
        </DicesGrid>
      </BoardContent>
    </MainContent>
  );
};
