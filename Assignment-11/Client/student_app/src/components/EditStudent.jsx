import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../Validation/formSchema";
import { toast, ToastContainer } from "react-toastify";








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
function EditStudent() {
  const [student, setStudent] = useState(Studentobject);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getStudentData()
  },[])

  const getStudentData = async () => {
    let response = await getStudent(id);
    console.log("this is the response => ", response);
    
   setStudent(response.data)
    
  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value })
  };

  const onEditStudent = async () => {

    try{

      await formSchema.validate(student, { abortEarly: false });

      // yaha api call kare ge Axios k through
      let response = await editStudent(student, id);
      navigate("/allstudents");

      


    }catch(err){
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
      <Typography variant="h4">Edit Student</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="Name" value={student.Name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="Email" value={student.Email} />
      </FormControl>
      <FormControl>
        <InputLabel>Course</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="Course"  value={student.Course}/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="Phone" value={student.Phone} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => onEditStudent()}>
         
          Edit Student
        </Button>
      </FormControl>
    </Container>
    </>
  );
}
export default EditStudent;
