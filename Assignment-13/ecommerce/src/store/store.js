import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/slices/productSlice'

const store = configureStore({
  reducer : {
    productSlice : productReducer,

  }
})

export default store;