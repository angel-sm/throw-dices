import React, { useState } from "react";
import { Dice } from "./components/Dice";

export const App = () => {
  const [turnAll, setTurnAll] = useState();
  return (
    <>
      <Dice turnAll={turnAll} />
      <Dice turnAll={turnAll} />
      <Dice turnAll={turnAll} />
      <button onClick={() => setTurnAll((turnAll) => !turnAll)}>Turn</button>
    </>
  );
};
