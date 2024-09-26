import { configureStore } from '@reduxjs/toolkit';
import studentSlice from '../features/studentSlice';

// Load students state from localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('students');
    if (serializedState === null) return undefined;
    // Ensure the state is wrapped in a 'students' property as expected by your app
    return { students: JSON.parse(serializedState) };
  } catch (err) {
    console.error('Error loading from local storage', err);
    return undefined;
  }
}

// Save the students state to localStorage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state.students); // Only save the students slice
    localStorage.setItem('students', serializedState);
  } catch (err) {
    console.error('Error saving to local storage', err);
  }
}

const store = configureStore({
  reducer: {
    students: studentSlice,
  },
  preloadedState: loadFromLocalStorage(), // Load students from localStorage on initial load
});

store.subscribe(() => saveToLocalStorage(store.getState())); // Save the state to localStorage on any update

export default store;
