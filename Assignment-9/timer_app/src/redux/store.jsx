import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import TimerSlice from "../features/TimerSlice";

export default configureStore({
  reducer: {
    // Define your reducers here (e.g., `counter: counterReducer`)
    counter: counterSlice,
    //  name : reducer
    timer: TimerSlice,
  },
});
