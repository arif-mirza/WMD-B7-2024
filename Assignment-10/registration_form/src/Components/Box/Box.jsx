import React, { useState } from "react";
import "../Box/box.css";
import { Button, TextField } from "@mui/material";
import InputWithIcon from "../../Components/UI/InputWithIcon";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TourIcon from "@mui/icons-material/Tour";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import formImg from "../../assets/images/formImg.png";
import "../UI/uistyle.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import formSchema from "../../Validations/userValidation"; // Validation schema

function Box() {
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({}); // Error state for handling validation errors

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    email: "",
    sex: "",
    language: "",
    about: "",
  });

  const handleFormSubmit = async () => {
    const isValidForm = await formSchema.isValid(formData);

    if (isValidForm) {
     
      console.log("Form submitted: ", formData);
     
      toast.success("Form Submitted Successfully!");
    } else {
    
      const validationErrors = await formSchema
        .validate(formData, { abortEarly: false })
        .catch((err) => {
          const formattedErrors = {};
          err.inner.forEach((error) => {
            formattedErrors[error.path] = error.message;
            toast.error(error.message);
          });
          return formattedErrors;
        });

      setErrors(validationErrors);
      alert("Form is invalid. Please fix the errors.");
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="heading-sec">
              <h2>Registration form</h2>
            </div>
            <div className="input-fields">
              <InputWithIcon
                label="User ID"
                icon={<AccountCircle />}
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                error={!!errors.userId} // Highlight field if error exists
                helperText={errors.userId} // Display error message
              />

              <InputWithIcon
                label="Name"
                icon={<PersonIcon />}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <InputWithIcon
                label="Password"
                icon={<LockIcon />}
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <InputWithIcon
                label="Address"
                icon={<LocationOnIcon />}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                error={!!errors.address}
                helperText={errors.address}
              />

              <InputWithIcon
                label="Country"
                icon={<TourIcon />}
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                error={!!errors.country}
                helperText={errors.country}
              />

              <InputWithIcon
                label="Zip Code"
                icon={<SendAndArchiveIcon />}
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
              />

              <InputWithIcon
                label="Email"
                icon={<LocalPostOfficeIcon />}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* SEX Selection */}
              <div className="checkbox-sec d-flex justify-content-start align-items-center my-3 mx-3 gap-3">
                <p className="mb-0">SEX</p>
                <div className="radio d-flex justify-content-center align-items-center mx-5">
                  <RadioGroup
                    row
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </div>
              </div>

              {/* LANGUAGE Selection */}
              <div className="checkbox-sec d-flex justify-content-start align-items-center my-3 mx-2 gap-3">
                <p className="mb-0">Language</p>
                <div className="radio d-flex justify-content-center align-items-center mx-3">
                  <RadioGroup
                    row
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value="English"
                      control={<Radio />}
                      label="English"
                    />
                    <FormControlLabel
                      value="Not English"
                      control={<Radio />}
                      label="Not English"
                    />
                  </RadioGroup>
                </div>
              </div>

              {/* Text Area */}
              <div className="textarea">
                <TextField
                  fullWidth
                  label="Write Anything Here"
                  multiline
                  rows={2}
                  variant="outlined"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff", // White text color inside the input
                      "& fieldset": {
                        borderColor: "#fff", // White outline color
                      },
                      "&:hover fieldset": {
                        borderColor: "gray", // White outline color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "gray", // White outline color when focused
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray", // White label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "gray", // White label color when focused
                    },
                  }}
                  error={!!errors.about}
                  helperText={errors.about}
                />
              </div>
            </div>

            <div className="btn-sec my-3">
              <Button
                onClick={handleFormSubmit}
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </div>
          </div>
          
          <div className="col-6">
            <div className="question">
              <p>
                <a href="#">Have You Already Registered?</a>
              </p>
            </div>

            <div className="img-sec d-flex justify-content-center align-items-center">
              <img src={formImg} alt="Registration" style={{ width: "120%" }} />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Box;
