import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/Form.slice';
import dataReducer from './slices/data.slice';
const store = configureStore({
  reducer: {
    formState: formReducer,
    dataState: dataReducer,
  },
});

export default store;
