import { createSlice } from '@reduxjs/toolkit';
const initialState: any = {
  question: 0,
  Alldata: [],
  currentData: {},
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    INIT: (state, action) => {
      state.Alldata = action.payload
    },
    // Next:()=>{

    // }
  },
});

export const { INIT } = dataSlice.actions;
export const Data = (state: any) => state.dataState;
export default dataSlice.reducer;
