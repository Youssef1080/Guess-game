import React from "react";
import "./gameEnd.css";
import { useSelector } from "react-redux/";
const GameEnd = () => {
  const { count, resultArr, arr2, chooses } = useSelector(
    (state) => state.game
  );

  return (
    <div className="game-end">
      <h3>
        {" "}
        The number is... <span>{resultArr[0] !== "Yes" && resultArr[0]}</span>
        {resultArr[0] === "Yes" ? "Hey i said betweeen 1 and 52" : resultArr[0]}
      </h3>
      <div className="buttons">
        <div className="btn-1">
          <p>i dont believe it!</p> <button>Play Again...</button>
        </div>
        <div className="btn-2">
          <p>Ok... you win</p>{" "}
          <button onClick={() => window.close()}>Exit!</button>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
