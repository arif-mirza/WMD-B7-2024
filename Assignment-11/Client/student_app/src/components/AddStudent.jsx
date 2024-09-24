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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/StudentSlice";
const Container = styled(FormGroup)`
  width: 50%;
  text-align: center;
  margin: 50px auto;
  gap: 20px;
`;

function AddStudent(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      name,
      email,
      course,
      phone,
    };

    // props.handleSubmit(newStudent)
    dispatch(addStudent(newStudent));
    navigate('/allstudents');
  
  };

  return (
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
  );
}

export default AddStudent;
