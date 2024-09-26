import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  students: [
    { id: 1, name: "arif", email: "arif@gmail.com", course: "web dev", phone: "83947395" },
    { id: 2, name: "ali", email: "ali@gmail.com", course: "app dev", phone: "84534545" }
  ],
};

export const studentSlice = createSlice({
  name: 'students',
 initialState,
  
  reducers: {
    addStudent: (state, action) => {
      state.students.push( {id: state.students.length + 1, ...action.payload} )
    },
    deleteStudent: (state,action) => {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    editStudent: (state, action) => {
      const { id, name, email, course, phone } = action.payload;
      const existingStudent = state.students.find((student) => student.id === id);
      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.email = email;
        existingStudent.course = course;
        existingStudent.phone = phone;
      }
    }
 
 
  }
})

export const { addStudent, deleteStudent, editStudent } = studentSlice.actions

export default studentSlice.reducer