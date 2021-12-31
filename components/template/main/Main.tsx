import React from "react";
import { MainProps } from "./Main.types";

import classes from "./Main.module.scss";
import Notification from "../../molecules/notification/Notification";
import { selectStatus } from "../../../store/reducers/weather/weatherSlice";
import { useAppSelector } from "../../../store/hooks";

const Main: React.FC<MainProps> = ({ children }) => {
  const status = useAppSelector(selectStatus);

  return (
    <main className={classes.main}>
      {children}
      {status.type === "error" && status.message && (
        <Notification type={status.type} message={status.message} />
      )}
    </main>
  );
};

export default Main;
