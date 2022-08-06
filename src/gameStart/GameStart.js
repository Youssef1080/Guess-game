import React, { useState } from "react";
import "./game-start.css";
import { useStateContext } from "../contexts/context";
const GameStart = () => {
  const { setStartGame } = useStateContext();

  return (
    <div className="game-start">
      <div className="header-cont">
        <h1>Think of a number between 1 to 52</h1>
      </div>
      <div className="para-btn">
        <p>Please... Be Honest...</p>
        <button onClick={() => setStartGame(true)}>OK</button>
      </div>
    </div>
  );
};

export default GameStart;
