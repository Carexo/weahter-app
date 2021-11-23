import React from "react";
import { NavProps } from "./Header.types";
import classes from "./Header.module.scss";

const Header: React.FC<NavProps> = ({ children }) => {
  return <header className={classes.header}>{children}</header>;
};

export default Header;
