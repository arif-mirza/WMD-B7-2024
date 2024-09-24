import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";


function StudentItem(props) {

  // const handleDelete = (id) => {
  //   alert(id);
  //   console.log("student data No ", props.item);
    
  
  // }


  return (
    <TableRow>
      <TableCell>{props.item?.id}</TableCell>
      <TableCell>{props.item?.name}</TableCell>
      <TableCell>{props.item?.email}</TableCell>
      <TableCell>{props.item?.course}</TableCell>
      <TableCell>{props.item?.phone}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "10px" }}
        >
          Edit
        </Button>
        <Button variant="contained" onClick={()=> props.handleDelete(props.item.id)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}

export default StudentItem;
