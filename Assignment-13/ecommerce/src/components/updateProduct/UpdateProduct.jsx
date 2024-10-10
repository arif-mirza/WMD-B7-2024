import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/slices/productSlice"; // Action for updating product
import { useParams, useNavigate, NavLink } from "react-router-dom"; // For accessing product ID from URL

const UpdateProduct = () => {
  const { id } = useParams(); // Get product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productSlice.products);

  // Find the product by ID from the Redux store
  const selectedProduct = products.find((product) => product.id == id);

  // Create state for form fields
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setPrice(selectedProduct.price);
      setDescription(selectedProduct.description);
      setCategory(selectedProduct.category);
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: selectedProduct.id, // Keep the same product ID
      title,
      price,
      description,
      category,
      image,
    };

    // Dispatch the update product action
    dispatch(updateProduct(updatedProduct));

    // Navigate back to products list after updating
    navigate("/products");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Update Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          
            <button  className="btn btn-outline-dark w-100 my-3">
              Update Product
            </button>

          
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
