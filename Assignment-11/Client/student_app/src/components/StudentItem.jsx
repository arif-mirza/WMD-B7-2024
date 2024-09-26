import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function StudentItem(props) {
  const navigate = useNavigate();
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
          component={Link}
          to={`/editstudent/${props.item.id}`}
          
          
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => props.handleDelete(props.item.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default StudentItem;
