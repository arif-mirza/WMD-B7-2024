// manage data from API code :::::::

import { createSlice } from "@reduxjs/toolkit";

// manage data from Local

const initialState = {
  products : [],
}

const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers : {
    // features
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    deleteProduct: (state, action) => { 
      const id = action.payload;
      console.log("id in deleteProduct => ", id);
      state.products = state.products.filter((product) => product.id !== id);
   
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload; // Update product
      }
    },
  }
})

 export  const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
 export default productSlice.reducer;




//  export const fetchProducts = createAsyncThunk(
//   "product/fetchProducts",
//   async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       console.log("data in fetchProducts action", data);
      
//       return data;
//   }
// );


// export const deleteProductApiAction = createAsyncThunk(
//   "product/deleteProduct",
//   async (id) => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
//           method: "DELETE",
//       });
//       const data = await response.json();
//       console.log("data in deleteProduct action", data);
//       return data;
//   });


// export const addProduct = createAsyncThunk(
//   "product/addProduct",
//   async (product) => {
//       const response = await fetch("https://fakestoreapi.com/products", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(product),
//       });
//       const data = await response.json();
//       console.log("data in addProduct action", data);
//       return data;
//   });