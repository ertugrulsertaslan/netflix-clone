import React from "react";
import { TextField } from "@mui/material";
export default function Input({ id, onChange, value, label, type }) {
  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& label.Mui-focused": {
      color: "white",
      borderColor: "white",
    },
  };
  return (
    <div className="relative">
      <TextField
        id={id}
        onChange={onChange}
        type={type}
        value={value}
        sx={style}
        className="text-white bg-neutral-700 w-full rounded-md"
        label={label}
        variant="filled"
      />
    </div>
  );
}
