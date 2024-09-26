import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  seconds: 0,
  minutes: 0,
  heading: "Select the Mode",
  selectedMinutes: 0,
  selectedSeconds: 0,
  mode: "mode",
};

export const TimerSlice = createSlice({
  name: "timer",
  initialState,
  //
  reducers: {
    // 1
    setMode: (state, action) => {
      state.mode = action.payload;
      state.heading = action.payload;
      state.seconds = 0;
      state.minutes = 0;
    },
    // 2
    setSelectedMinutes: (state, action) => {
      state.selectedMinutes = action.payload;
    },
    // 3
    setSelectedSeconds: (state, action) => {
      state.selectedSeconds = action.payload;
    },
    // 4
    startTimer : (state) => {
      state.isRunning = true;

    },
    // 5
    stopTimer : (state) => {
      state.isRunning = false;
    },
    // 6 
    resetTimer : (state) => {
      state.isRunning = false;
      state.seconds = 0;
      state.minutes = 0;
      state.selectedMinutes = 0; // Fix: Reset selected minutes
      state.selectedSeconds = 0; // Fix: Reset selected seconds
    },
    // 7
    incrementSeconds : (state) => {
      if(state.seconds === 59){
        state.seconds = 0;
        state.minutes++;
      }else{
        state.seconds++;
      }
    },
    // 8
    decrementTimer : (state) => {
      if(state.seconds === 0){
        if(state.minutes === 0){
          state.isRunning = false;

        }else{
          state.minutes--;
          state.seconds = 59;
        }
      }else{
        state.seconds--;
      }
    },
    // 9

  },
});


export const {
  setMode,
  setSelectedMinutes,
  setSelectedSeconds,
  startTimer,
  stopTimer,
  resetTimer,
  incrementSeconds,
  decrementTimer,
} = TimerSlice.actions;

export default TimerSlice.reducer;
