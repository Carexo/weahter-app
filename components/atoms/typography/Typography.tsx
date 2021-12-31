import React from "react";
import { TypographyProps } from "./Typography.types";
import classes from "./Typography.module.scss";

const Typography: React.FC<TypographyProps> = ({
  el,
  size,
  weight,
  color,
  children,
}) => {
  const Component = el;
  const fontSize = size || 16;
  const fontWeight = weight || 500;

  const style = { fontSize, fontWeight, margin: 0 };

  return (
    <Component style={style} className={classes[color || "white"]}>
      {children}
    </Component>
  );
};

export default Typography;
