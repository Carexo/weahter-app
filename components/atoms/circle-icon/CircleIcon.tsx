import React from "react";
import Button from "../button/Button";
import Icon from "@mdi/react";
import classes from "./CircleIcon.module.scss";

import { CircleIconProps } from "./CircleIcon.types";

const CircleIcon: React.FC<CircleIconProps> = ({ path, color, onClick }) => {
  return (
    <Button onClick={onClick} className={classes["circle-icon"]}>
      <Icon path={path} size={1} color={color} />
    </Button>
  );
};

export default CircleIcon;
