// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './StudentSlice'; // Import the student slice

export const store = configureStore({
  reducer: {
    students: studentReducer, // Add the student reducer
  },
});
