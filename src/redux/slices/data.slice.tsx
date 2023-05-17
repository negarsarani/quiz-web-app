import { createSlice } from '@reduxjs/toolkit';
const initialState: any = {
  question: 0,
  Alldata: [],
  currentData: {},
  numberOfQuestions: { AllQuestion: 0, NumberOfCorrect: 0 },
  correctAnswer: -1,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    INIT: (state, action) => {
      state.Alldata = action.payload;
      state.currentData = action.payload[state.question];
      state.numberOfQuestions = {
        AllQuestion: action.payload.length,
        NumberOfCorrect: 0,
      };
    },
    NEXT: (state, action) => {
      if (action.payload.flag === true) {
        state.numberOfQuestions.NumberOfCorrect =
          state.numberOfQuestions.NumberOfCorrect + 1;
      }
      state.question = state.question + 1;
      state.currentData = { ...state.Alldata[state.question] };
    },
    RESET: (state) => {
      state.question = 0;
      state.Alldata = [];
      state.currentData = {};
      state.numberOfQuestions = { AllQuestion: 0, NumberOfCorrect: 0 };
    },
    ChangeAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
  },
});

export const { INIT, NEXT, RESET ,ChangeAnswer } = dataSlice.actions;
export const Data = (state: any) => state.dataState;
export default dataSlice.reducer;
