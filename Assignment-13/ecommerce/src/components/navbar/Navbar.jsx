import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import Login from "../../Auth/login/Login";
import "../../Auth/login/loginStyle.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Register from "../../Auth/Register/Register";
import logo from "../../assets/images/mj-collection(2).JPEG";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-2">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3 d-flex justify-centent-center align-items-center" to="/">
          <img src={logo} alt=""  className="mx-1" height="50px" width="50px" style={{padding:'1px', borderRadius:'50%'}} />
            MJ Collection
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-outline-dark ms-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <i className="fa fa-sign-in me-1"></i> Login
              </button>

              <button
                type="button"
                className="btn btn-outline-dark ms-2"
                data-bs-toggle="modal"
                data-bs-target="#registerModel"
              >
                <i className="fa fa-user-plus me-1"></i> Register
              </button>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Login />
      <Register />
    </>
  );
}

export default Navbar;
