import React from "react";
import Typography from "../../atoms/typography/Typography";
import { HightlightProps } from "./Hightlight.types";

import classes from "./Hightlight.module.scss";

const Hightlight: React.FC<HightlightProps> = ({
  title,
  value,
  unit,
  size,
  children,
}) => {
  const height = size === "regular" ? "10rem" : "12.75rem";

  return (
    <div className={classes.hightlight} style={{ height: height }}>
      <Typography el={"p"}>{title}</Typography>
      <div className={classes.value}>
        <Typography el={"p"} weight={700} size={64}>
          {value}
        </Typography>
        <Typography el={"p"} size={36}>
          {unit}
        </Typography>
      </div>
      {children}
    </div>
  );
};

export default Hightlight;
