import React from "react";
import Typography from "../../atoms/typography/Typography";
import { HightlightProps } from "./Hightlight.types";

import classes from "./Hightlight.module.scss";

const Hightlight: React.FC<HightlightProps> = ({
  title,
  value,
  unit,
  children,
}) => {
  return (
    <div className={classes.hightlight}>
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
