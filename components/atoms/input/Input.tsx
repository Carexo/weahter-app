import React from "react";
import { InputProps } from "./Input.types";
import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({ title, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      title={title}
      placeholder={title}
      type="text"
      className={classes.input}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
