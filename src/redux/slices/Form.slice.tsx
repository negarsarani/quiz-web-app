import { createSlice } from '@reduxjs/toolkit';
// import {}
const initialState = {
  number: "",
  category: '',
  difficulty: ''
};
export const formSlice = createSlice({
  name: 'formState',
  initialState,
  reducers: {
    submit: (state, action) => {
      state.number = '10000';
    },
  },
});

export const { submit } = formSlice.actions;
export default formSlice.reducer

export const FormSubmit = (state:any) => state.formState.value
