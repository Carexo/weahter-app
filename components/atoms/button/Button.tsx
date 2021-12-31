import React from "react";
import { ButtonProps } from "./Button.types";
import classnames from "classnames";

import classes from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classnames(className, classes.button, {
        [classes.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
