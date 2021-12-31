import React from "react";
import { NavProps } from "./Header.types";

import { useAppSelector } from "../../../store/hooks";
import { selectStatus } from "../../../store/reducers/header/headerSlice";

import classes from "./Header.module.scss";

import Notification from "../../molecules/notification/Notification";

const Header: React.FC<NavProps> = ({ children }) => {
  const status = useAppSelector(selectStatus);

  return (
    <header className={classes.header}>
      {children}
      {status.type === "error" && status.message && (
        <Notification type={status.type} message={status.message} />
      )}
    </header>
  );
};

export default Header;
