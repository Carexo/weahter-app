import React from "react";
import { MainProps } from "./Main.types";

import classes from "./Main.module.scss";

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Main;
