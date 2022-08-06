import React, { useState } from "react";
import GameStart from "../gameStart/GameStart";
import GameEnd from "../gameEnd/GameEnd";
import "./game.css";
import { useSelector, useDispatch } from "react-redux/";
import { useStateContext } from "../contexts/context";
import { changeCount, handleGame } from "../redux/gameSlice";
const Game = () => {
  const dispatch = useDispatch();
  const { startGame } = useStateContext();

  const { count, resultArr, arr2, chooses } = useSelector(
    (state) => state.game
  );

  const numsArr = [
    [
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
      41, 43, 45, 47, 49, 51
    ],
    [
      2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38,
      39, 42, 43, 46, 47, 50, 51
    ],
    [
      4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38,
      39, 44, 45, 46, 47, 52
    ],
    [
      8, 9, 10, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41,
      42, 43, 44, 45, 46, 47
    ],
    [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49,
      50, 51, 52
    ],
    [
      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52
    ]
  ];

  console.log(resultArr);
  // console.log(arr2);
  // console.log(chooses);

  const headers = [
    "Is the number appeared here?",
    "How about here?",
    "And here...",
    "... here???",
    "Hmmm... How about here?",
    "Now here???"
  ];
  return (
    <div className="container">
      {!startGame && <GameStart />}
      {startGame && count < 6 && (
        <div className="game">
          <div className="change-header">
            <h3>{headers[count]}</h3>
          </div>

          <div className="num-cont">
            {numsArr[count].map((item, ind) => (
              <span key={ind}>{`${item},`}</span>
            ))}
          </div>
          <div className="buttons">
            <button
              className="yes"
              onClick={(e) => {
                dispatch(
                  handleGame({
                    text: e.target.textContent,
                    arr: numsArr[count]
                  })
                );
                dispatch(changeCount());
              }}
            >
              Yes
            </button>
            <button
              className="no"
              onClick={(e) => {
                dispatch(
                  handleGame({
                    text: e.target.textContent,
                    arr: numsArr[count]
                  })
                );
                dispatch(changeCount());
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
      <GameEnd />
    </div>
  );
};

export default Game;
