import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Product from "../src/components/product/Product.jsx";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/addproducts/AddProduct.jsx";
import UpdateProduct from "./components/updateProduct/UpdateProduct.jsx";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
