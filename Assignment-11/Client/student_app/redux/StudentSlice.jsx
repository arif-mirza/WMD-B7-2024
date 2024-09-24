// src/redux/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      name: "arif",
      email: "arif@gamil.com",
      course: "web dev",
      phone: "83947395",
    },
    {
      id: 2,
      name: "ali",
      email: "ali@gamil.com",
      course: "app dev",
      phone: "84534545",
    },
  ],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.data.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.data = state.data.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
