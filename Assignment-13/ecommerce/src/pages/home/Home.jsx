import React from "react";
import bg from "../../assets/images/bg.jpg"
import "../home/home.css";
import Products from "../products/Products";

function Home() {
  return (
    <>
     <div className="hero">
      <div class="card text-bg-dark border-0">
        <img src={bg} class="card-img" alt="Background"/>
        <div className="overlay"></div>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">

          <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrival</h5>
          <p class="card-text leads fs-2">
            Check Out All Trends.
          </p>
          </div>
        
        </div>
      </div>
    </div>
    <Products />
    
    
    </>
   
  );
}

export default Home;
