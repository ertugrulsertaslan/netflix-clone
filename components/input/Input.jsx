import React, { useState } from "react";
import { TextField } from "@mui/material";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";
export default function Input({ id, onChange, value, label, type }) {
  const [showPassword, setShowPassword] = useState(true);
  const style = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  };

  const Icon = showPassword ? LiaEyeSolid : LiaEyeSlashSolid;

  return (
    <div className="relative">
      <TextField
        id={id}
        onChange={onChange}
        type={showPassword ? "password" : "text"}
        value={value}
        sx={style}
        className="text-white  w-full rounded-md"
        label={label}
        variant="outlined"
      />
      {type === "password" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute text-white right-5 top-1/3"
        >
          <Icon />
        </div>
      )}
    </div>
  );
}
