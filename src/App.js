import React, { useState } from "react";
import { Dice } from "./components/Dice";

export const App = () => {
  const [turnAll, setTurnAll] = useState();
  const [isTurn, setIsTun] = useState(true);

  return (
    <>
      <Dice turnAll={turnAll} setIsTun={setIsTun} faces={6} />
	    <Dice turnAll={turnAll} setIsTun={setIsTun} faces={6} />
      <Dice turnAll={turnAll} setIsTun={setIsTun} faces={10} />

      {isTurn ? (
        <button onClick={() => setTurnAll((turnAll) => !turnAll)}>Turn</button>
      ) : (
        ""
      )}
    </>
  );
};
