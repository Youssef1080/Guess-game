import React from "react";
import "./gameEnd.css";
import { useSelector } from "react-redux/";
import { useNavigate } from "react-router-dom";
const GameEnd = () => {
  const navigate = useNavigate();
  const { count, resultArr, arr2, chooses } = useSelector(
    (state) => state.game
  );
  function check() {
    chooses.forEach((ele) => {
      if (ele === "No") {
        return {
          h3: "The number is...",
          span: "nothing"
        };
      }
    });
    return "";
  }

  return (
    <div className="game-end">
      <h3>
        {" "}
        {resultArr[0] !== "Yes" && "The number is..."}
        {check()?.h3}{" "}
        <span>
          {check()?.span}
          {resultArr[0] !== "Yes" && resultArr[0]}
        </span>
        {resultArr[0] === "Yes" && "Hey i said betweeen 1 and 52"}
      </h3>
      <div className="buttons">
        <div className="btn-1">
          <p>i dont believe it!</p>{" "}
          <button onClick={() => navigate("/")}>Play Again...</button>
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
