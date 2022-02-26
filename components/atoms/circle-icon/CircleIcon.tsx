import React from "react";
import Button from "../button/Button";
import Icon from "@mdi/react";
import classes from "./CircleIcon.module.scss";

import { CircleIconProps } from "./CircleIcon.types";

const CircleIcon: React.FC<CircleIconProps> = ({
  label,
  path,
  color,
  size,
  onClick,
}) => {
  const iconSize = size || 1;
  return (
    <Button onClick={onClick} className={classes["circle-icon"]}>
      <span>{label}</span>
      <Icon path={path} size={iconSize} color={color} />
    </Button>
  );
};

export default CircleIcon;
