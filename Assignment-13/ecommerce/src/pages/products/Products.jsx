import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteProduct } from "../../store/slices/productSlice";
import { addProduct } from "../../store/slices/productSlice";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const products = useSelector((state) => state.productSlice.products);
  const dispatch = useDispatch();
  console.log("products in comp => ", products);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedProducts = await response.json();


      if (fetchedProducts.length) {
        fetchedProducts.forEach((product) => {
          dispatch(addProduct(product));
        });
      }
      setLoading(false);
    };

    if (products.length === 0) {
      getProducts();
    }

    return () => {};
  }, [dispatch, products.length]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedItems = products.filter((x) => x.category === cat);
    setFilter(updatedItems);
  };

  const deleteItem = (id) => {
    dispatch(deleteProduct(id));
  };

  const ShowProducts = ({ filteredProducts }) => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Woman's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            electronic
          </button>
        </div>
        {filteredProducts.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4 " key={product.id}>
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">{product.title}</h5>
                  <p class="card-text lead fw-bold">${product.price}</p>
                  <div className="buttons d-flex justify-content-center flex-wrap gap-2">
                    <NavLink to={`/products/${product.id}`}>
                      <button class="btn btn-outline-dark me-1">Buy Now</button>
                    </NavLink>
                    <button
                      class="btn btn-outline-dark me-1 "
                      onClick={() => deleteItem(product.id)}
                    >
                      Delete
                    </button>
                    <NavLink to={`/updateproduct/${product.id}`}>
                      <button class="btn btn-outline-dark me-1">Update</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 mb-3 d-flex justify-content-between ">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <NavLink to="/addproduct" className="btn btn-outline-dark mb-0">
              Add Product
            </NavLink>
          </div>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts filteredProducts={products} />}
        </div>
      </div>
    </>
  );
}

export default Products;
