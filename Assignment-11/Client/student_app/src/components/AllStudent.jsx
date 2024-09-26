import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  styled,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import StudentItem from "./studentItem.jsx";
import AddStudent from "./AddStudent.jsx";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../features/studentSlice.js";


const TableContainer = styled(Table)`
  margin: 10px auto;
  width: 90%;
`;

const Thead = styled(TableRow)`
  background: #000;
  color: #fff;
  width: 100px;
  > th {
    color: #fff;
  }
`;

function AllStudent(props) {

  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // let newData = data.filter((item) => item.id !== id);
    // setData(newData);

      dispatch(deleteStudent(id));
  
    

  };

const handleSubmit = (student) => {
    console.log("student from back = > ", student);
    setData([...data, {
      id: data.length + 1,
     ...student,
    }]);
    
}



  return (
    <>
    
    <TableContainer>
      <TableHead>
        <Thead>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Course</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {students.map((item) => (
          <StudentItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </TableBody>
    </TableContainer>
    </>
  );
}

export default AllStudent;
