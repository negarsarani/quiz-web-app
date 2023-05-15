import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slices/Form.slice';
// import 
const store = configureStore({
  reducer: {
    formState: formSlice,
  },
});

export default store;
