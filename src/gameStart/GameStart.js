import React, { useState } from "react";
import "./game-start.css";
import { useStateContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setZero } from "../redux/gameSlice";
const GameStart = () => {
  const { setStartGame } = useStateContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="game-start">
      <div className="header-cont">
        <h1>Think of a number between 1 to 52</h1>
      </div>
      <div className="para-btn">
        <p>Please... Be Honest...</p>
        <div>
          <button
            onClick={() => {
              navigate("/game");
              dispatch(setZero());
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
