import React, { useState } from 'react'
import {Table, TableCell, TableHead, TableRow, TableBody, styled, Button} from "@mui/material";
import { useEffect } from 'react';
import { getStudents, deleteStudent } from "../service/api.js"
import { Link } from 'react-router-dom';


const TableContainer = styled(Table)`
  margin: 10px auto;
  width: 90%;

`;

const Thead = styled(TableRow)`
  background: #000;
  color: #fff;
  width:100px;
  > th  {
  color: #fff;
  }

`;



function AllStudent() {
  const [student , setStudent] = useState([]);

  // data nikalna hy hamne us k liye api call karni hogi
  const getStudentDetails = async () => {
    let response = await getStudents()
    console.log(response);
    setStudent(response.data)
  

    
  }

  const deleteSudent = async (id) => {
    let response = await deleteStudent(id);
    console.log(response);
    getStudentDetails();
    
  }

  useEffect(() => {
    getStudentDetails()

  }, [])
  
  return (

    <TableContainer>
      <TableHead>
        <Thead>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Course</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>

      </TableHead>
      <TableBody>
        {
          student.map((student,index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.Name}</TableCell>
              <TableCell>{student.Email}</TableCell>
              <TableCell>{student.Course}</TableCell>
              <TableCell>{student.Phone}</TableCell>
              <TableCell>
                <Button variant='contained' color='secondary' style={{marginRight:'10px'}} component={Link} to={`/edit/${student.id}`} >Edit</Button>
                <Button variant='contained' onClick={() => deleteSudent(student.id)} >Delete</Button>
              </TableCell>
              
              
            </TableRow>
          ))
        }
      </TableBody>
    </TableContainer>
  )
}

export default AllStudent