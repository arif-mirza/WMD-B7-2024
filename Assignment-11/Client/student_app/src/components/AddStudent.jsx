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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../features/studentSlice";
import formSchema from "../Validation/formSchema";
import * as yup from "yup"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled(FormGroup)`
  width: 50%;
  text-align: center;
  margin: 50px auto;
  gap: 20px;
`;

function AddStudent(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, email, course, phone }
    try{
      await formSchema.validate(newStudent,{ abortEarly: false });
      dispatch(addStudent(newStudent));
      navigate("/allstudents");

    }catch(err){
      if (err instanceof yup.ValidationError) {
        err.errors.forEach((error) => {
          toast.error(error); // Display each error message
        });
      }
      
    }
  }

  return (
    <>   
    <ToastContainer />
     <Container>
      <Typography variant="h4">Add Student</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl>
        <InputLabel>Course</InputLabel>
        <Input name="course" onChange={(e) => setCourse(e.target.value)} />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(e) => setPhone(e.target.value)} />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          Add Student
        </Button>
      </FormControl>
    </Container>
    </>

  );
}
export default AddStudent;
