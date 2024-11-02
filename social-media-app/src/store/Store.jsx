import { configureStore} from "@reduxjs/toolkit";
import feedReducer from "../store/Slices/feedSlice";
import authReducer from "./Slices/authSlice";

export const store = configureStore({
  reducer : {
    feedSlice : feedReducer,
    authSlice : authReducer
  }
})