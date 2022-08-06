import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  resultArr: [],
  arr2: [],
  arr_1: [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47, 49, 51
  ],
  arr_2: [
    8, 9, 10, 7, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41,
    42, 43, 44, 45, 46, 47
  ],
  arr_3: [
    4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39,
    44, 45, 46, 47, 52
  ],
  arr_4: [
    8, 9, 10, 7, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41,
    42, 43, 44, 45, 46, 47
  ],
  arr_5: [
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50,
    51, 52
  ],
  arr_6: [
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52
  ],
  chooses: []
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handleGame: (state, action) => {
      const { arr, text } = action.payload;
      state.chooses.push(text);
      //   console.log(state.chooses);
      //   if (state.count == 0) {
      //     if (text === "yes") {
      //         state.resultArr = arr
      //     }else{
      //         state.arr2 = arr
      //     }
      //   }else if(state.count >= 1){
      //     if (text === "yes" && state.resultArr.length) {
      //         state.resultArr = arr
      //     }else if(text === "yes" && state.arr2.length){
      //         state.arr2 = arr
      //     }
      //   }

      if (state.count == 0) {
        //   console.log("intered");
        state.resultArr = [...arr, text];
      } else if (state.count >= 1) {
        state.arr2 = [...arr, text];
        //   console.log(state.resultArr);
        //   console.log(state.arr2);
        if (state.resultArr.length && state.arr2.length) {
          const cond = state.resultArr[state.resultArr.length - 1];
          const cond2 = state.arr2[state.arr2.length - 1];
          //   console.log(state.resultArr.length);
          //   console.log(cond, cond2);
          if (cond === "Yes" && cond2 === "Yes") {
            let arr = [];
            state.arr2.map((item, ind) => {
              let condition = false;
              state.resultArr.forEach((element) => {
                if (item == element) {
                  condition = true;
                }
              });
              if (condition) {
                arr.push(item);
              }
            });
            state.resultArr = arr;
          } else if (cond === "No" && cond2 === "Yes") {
            console.log("intered");
            state.resultArr.push("Yes");
            let arr = [];
            state.arr2.map((item, ind) => {
              let condition = true;
              state.resultArr.forEach((element) => {
                if (item == element) {
                  condition = false;
                }
              });
              if (condition) {
                arr.push(item);
              }
            });
            arr.push("Yes");
            state.resultArr = arr;
          } else if (cond === "Yes" && cond2 === "No") {
            console.log("intered");
            // state.resultArr.pop();
            // state.resultArr.push(cond2);

            console.log(state.resultArr[state.resultArr.length - 1]);
            let arr = [];
            state.resultArr.map((item, ind) => {
              let condition = true;
              state.arr2.forEach((element) => {
                if (item == element) {
                  condition = false;
                }
              });
              if (condition) {
                arr.push(item);
                // console.log(arr);
              }
            });
            state.resultArr = arr;
          } else if (cond === "No" && cond2 === "No") {
            const nums = [...state.resultArr, ...state.arr2];
            const ind = nums.indexOf("No");
            nums.splice(ind, 1);
            // console.log(nums);
            state.resultArr = nums;
          }
        }
      }
    },
    changeCount: (state) => {
      //   console.log(state.count);
      state.count += 1;
    }
  }
});

export const { handleGame, changeCount } = gameSlice.actions;
