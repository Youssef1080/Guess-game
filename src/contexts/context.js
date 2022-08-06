import { useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [guessedArray, setGuessedArray] = useState([]);
  const [theOne, setTheone] = useState([]);
  const [startGame, setStartGame] = useState(false);

  function check(text, arr) {
    console.log(arr, count);
    if (count == 1) {
      console.log(arr, "intered");
      setTheone([...arr, text]);
      console.log(theOne);
    } else if (count >= 2) {
      // if (text === "Yes") {
      setGuessedArray([...arr, text]);
      // }
    }
  }

  useEffect(() => {
    if (count >= 2) {
      if (theOne.length && guessedArray.length) {
        const cond = theOne[theOne.length - 1];
        const cond2 = guessedArray[guessedArray.length - 1];
        console.log(guessedArray.length);
        if (
          (cond === "Yes" && cond2 === "Yes") ||
          (cond === "No" && cond2 === "No")
        ) {
          const set = new Set(...theOne, ...guessedArray);
          setTheone([set, cond2]);
        } else if (cond === "No" && cond2 === "Yes") {
          let arr = [];
          guessedArray.map((item, ind) => {
            let state = true;
            theOne.forEach((element) => {
              if (item == element) {
                state = false;
              }
            });
            if (state) {
              arr.push(item);
            }
          });
          setTheone(arr);
        } else if (cond === "Yes" && cond2 === "No") {
          let arr = [];
          theOne.map((item, ind) => {
            let state = true;
            guessedArray.forEach((element) => {
              if (item == element) {
                state = false;
              }
            });
            if (state) {
              arr.push(item);
            }
          });
          setTheone(arr);
        }
      }
    }
  }, [guessedArray, theOne]);
  // console.log(count);
  // console.log(theOne);
  // console.log(guessedArray);

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
      8, 9, 10, 7, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40,
      41, 42, 43, 44, 45, 46, 47
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
  return (
    <StateContext.Provider
      value={{
        startGame,
        setStartGame,
        count,
        setCount,
        check
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
