import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// manage data from API code :::::::

//  1) fetch data from api
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("data in fetchProduct action", data);

    return data;
  }
);

//  2) addproduct in api

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

// 3) delete data from APi

export const deleteAPIProduct = createAsyncThunk(
  "product/deleteproduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("data in delteproduct action =>>>>", data);
    return data;
  }
);

// manage data from Local

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // features
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    // deleteProduct: (state, action) => {
    //   const id = action.payload;
    //   console.log("id in deleteProduct local=> ", id);
    //   state.products = state.products.filter((product) => product.id !== id);
    // },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload; // Update product
      }
    },
  },

  // write the extra reducer for this
  extraReducers: (builder) => {
    // 1) fetch product

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    // 2) deleteproduct in products

    builder.addCase(deleteAPIProduct.fulfilled, (state, action) => {
      const id = action.payload.id;
      console.log("id in deleteProduct local=> ", id);
      state.products = state.products.filter((product) => product.id !== id);
    });

    // // 3) add product in products
    // builder.addCase(addProduct.fulfilled, (state, action) => {
    //   state.products = [action.payload, ...state.products];
    // });
  },
});

export const { deleteProduct , updateProduct, addProduct} = productSlice.actions;
export default productSlice.reducer;
