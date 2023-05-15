import { createSlice } from '@reduxjs/toolkit';
// import {}
const initialState = {
  number: 0,
  category: '',
  difficulty: '',
};
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit: (state, action) => {
     state.number = action.payload.number;
      state.category = action.payload.category;
      state.difficulty = action.payload.difficulty;
    },
  },
});

export const { submit } = formSlice.actions;

export const FormSubmit = (state: any) => state.formState;


export default formSlice.reducer;
