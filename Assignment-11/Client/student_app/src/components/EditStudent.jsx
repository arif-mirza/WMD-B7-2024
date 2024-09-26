import React, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../features/studentSlice";
import formSchema from "../Validation/formSchema";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled(FormGroup)`
  width: 50%;
  text-align: center;
  margin: 50px auto;
  gap: 20px;
`;

function EditStudent() {
  const { id } = useParams(); // Get student ID from URL params
  const students = useSelector((state) => state.students.students);
  const existingStudent = students.find(
    (student) => student.id === parseInt(id)
  );

  const [name, setName] = useState(existingStudent?.name || "");
  const [email, setEmail] = useState(existingStudent?.email || "");
  const [course, setCourse] = useState(existingStudent?.course || "");
  const [phone, setPhone] = useState(existingStudent?.phone || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedStudent = { id: parseInt(id), name, email, course, phone };

    try {
      await formSchema.validate(updatedStudent, { abortEarly: false });
      dispatch(editStudent(updatedStudent));
      navigate("/allstudents");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.errors.forEach((error) => {
          toast.error(error);
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <Typography variant="h4">Edit Student</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Course</InputLabel>
          <Input value={course} onChange={(e) => setCourse(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Update Student
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default EditStudent;
