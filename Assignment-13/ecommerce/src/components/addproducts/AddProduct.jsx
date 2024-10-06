import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProduct } from "../../store/slices/productSlice";

function AddProduct() {
  // states
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setcategory] = useState("");

 const dispatch = useDispatch();
 const handleImageChange = (e) => {
  const file = e.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader(); // Create a FileReader object
    reader.onloadend = () => {
      setImage(reader.result); // Set the image state with the Data URL
    };
    reader.readAsDataURL(file); // Convert the file to a Data URL
  }
};





  const handleAddProduct = () => {
    // log the values
    console.log("product img", Image)
    console.log('Product Name : ', name);
    console.log('Product Price : ', price);
    console.log('Product Description : ', description);
    console.log('Product Category : ', category);

    let newProduct = {
      id: Date.now(),
      image,
      title : name,
      price,
      description,
      category,
    };
    console.log("newProduct ====> ", newProduct);
    // dispatch action to add new product
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      {/* add product form  */}

      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-4">
            <h2 className="display-5 fw-bold">Add Product</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 w-50 ">
            <form>
              <div className="form-group">
                <label for="productName" className="my-2">
                  Product Image
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-group">
                <label for="productName" className="my-2">
                  Product Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-group">
                <label for="productPrice" className="my-2">
                  Product Price
                </label>
                <input
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  id="productPrice"
                  placeholder="Enter product price"
                />
              </div>
              <div className="form-group">
                <label for="Description" className="my-2">
                  Description
                </label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                  id="Description"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label for="category" className="my-2">
                  category
                </label>
                <input
                  onChange={(e) => setcategory(e.target.value)}
                  type="text"
                  className="form-control"
                  id="category"
                  placeholder="category"
                />
              </div>

              <NavLink
                to="/products"
                type="submit"
                className="btn btn-outline-dark w-100 my-4"
                onClick={handleAddProduct}
              >
                Add Product
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
