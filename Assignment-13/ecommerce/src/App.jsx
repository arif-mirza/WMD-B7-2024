import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Product from "../src/components/product/Product.jsx";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/addproducts/AddProduct.jsx";
import UpdateProduct from "./components/updateProduct/UpdateProduct.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Loader from "./components/loader/Loader.jsx";
import { useState, useEffect } from "react";


function App() {
  

  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Delay for 2 seconds, you can remove this in real use case
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }











  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
