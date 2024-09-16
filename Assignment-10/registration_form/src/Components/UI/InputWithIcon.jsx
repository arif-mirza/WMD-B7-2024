import * as React from "react";
import { TextField, InputAdornment } from "@mui/material";

export default function InputWithIcon({
  label,
  icon,
  name,
  value,
  onChange,
  type = "text",
  
}) {
  return (
    // {props.icon && React.cloneElement(props.icon, { sx: { color: "#fff", mr: 1, my: 0.5 } })}
    <TextField
     
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      variant="standard"
      fullWidth
      id="fullWidth"
      InputProps={{
        startAdornment: <InputAdornment>{icon}</InputAdornment>,
        style: { color: "#fff" }, // This will set the text color to white
      }}
      InputLabelProps={{
        style: { color: "gray" }, // Label color
      }}
      InputProps={
        {
            // Keep the underline
        }
      }
      sx={{
        // Override underline colors and input text color
        "& .MuiInputBase-input": {
          color: "#fff", // Input text color to white
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "#fff", // Default underline color
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "#fff", // Hover underline color
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#fff", // Focused underline color
        },
      }}
    />
  );
}
