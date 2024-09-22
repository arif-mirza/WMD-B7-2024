import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addStudent } from "../service/api";
import { useNavigate } from "react-router-dom";
import formSchema from "../Validation/formSchema.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const Container = styled(FormGroup)`
  width: 50%;
  text-align: center;
  margin: 50px auto;
  gap: 20px;
`;

const Studentobject = {
  Name: "",
  Email: "",
  Course: "",
  Phone: "",
};

function AddStudent() {
  const [student, setStudent] = useState(Studentobject);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onAddStudent = async () => {
    try {
      // Validate form using Yup schema
      await formSchema.validate(student, { abortEarly: false });

      // API call to add student after successful validation
      let response = await addStudent(student);
      if (response.status === 201 || response.status === 200) {

        toast.success("Student added successfully!");
      }
      navigate("/allstudents");


    } catch (err) {
      // If validation fails, handle the errors and show them with Toastify
      if (err instanceof yup.ValidationError) {
        err.errors.forEach((error) => {
          toast.error(error); // Display each error message
        });
      }
    }
  };

  return (
    <>
     

      <ToastContainer />
      
      <Container>
        <Typography variant="h4">Add Student</Typography>
        
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={handleChange}
            name="Name"
            value={student.Name}
          />
        </FormControl>
        
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={handleChange}
            name="Email"
            value={student.Email}
          />
        </FormControl>
        
        <FormControl>
          <InputLabel>Course</InputLabel>
          <Input
            onChange={handleChange}
            name="Course"
            value={student.Course}
          />
        </FormControl>
        
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={handleChange}
            name="Phone"
            value={student.Phone}
          />
        </FormControl>
        
        <FormControl>
          <Button variant="contained" onClick={onAddStudent}>
            Add Student
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default AddStudent;
