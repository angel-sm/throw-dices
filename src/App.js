import React, { useState } from "react";
import { Dice } from "./components/Dice";

export const App = () => {
  const [turnAll, setTurnAll] = useState();
  return (
    <>
      <Dice turnAll={turnAll} faces={6} />
      <Dice turnAll={turnAll} faces={6} />
      <Dice turnAll={turnAll} faces={10} />
      <button onClick={() => setTurnAll((turnAll) => !turnAll)}>Turn</button>
    </>
  );
};
