import React from "react";
import "../login/loginStyle.css";
import Register from "../Register/Register";

function Login() {
  const handleSignUp = () => {
    // active the register model
  };

  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content login-modal">
            <div className="modal-header border-0">
              <h5 className="modal-title text-white" id="loginModalLabel">
                Welcome Back
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <h2 className="text-white text-center mb-4">Sign in</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control input-field"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input-field"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="text-white">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-3">
                  Sign In
                </button>
              </form>
              <div className="text-center mt-4">
                <span className="text-white">
                  Don't have an account?
                  <a
                    href="#"
                    type="button"
                    onClick={handleSignUp}
                    className="text-primary"
                  >
                    Sign Up
                  </a>
                </span>
              </div>
              <div className="text-center mt-3">
                <span className="text-white">Sign In with</span>
                <div className="social-icons mt-2">
                  <a href="#" className="text-white me-2">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fa fa-google"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
