import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/Form.slice';
const store = configureStore({
  reducer: {
    formState: formReducer,
  },
});

export default store;
