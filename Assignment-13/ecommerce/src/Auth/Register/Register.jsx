import React from 'react'
import "../Register/register.css";

function Register() {
  return (
   <>
    <div
  className="modal fade"
  id="registerModel"
  tabIndex="-1"
  aria-labelledby="loginModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content login-modal">
      <div className="modal-header border-0">
        <h5 className="modal-title text-white" id="loginModalLabel">
          Registration Form
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
          <h2 className="text-white text-center mb-4">Sign Up</h2>

          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              className="form-control input-field"
              id="fullName"
              placeholder="Enter Full Name here"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control input-field"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control input-field"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-dark w-100 mt-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
   
   </>
  )
}

export default Register