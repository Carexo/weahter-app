import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { NotificationProps } from "./Notification.types";
import { CSSTransition } from "react-transition-group";

import classes from "./Notification.module.scss";
import Typography from "../../atoms/typography/Typography";

const Notification: React.FC<NotificationProps> = ({ type, message }) => {
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    setIsShowed(true);
    const timer = setTimeout(() => {
      setIsShowed(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const style = {
    enter: classes["notification-enter"],
    enterActive: classes["notification-enter-active"],
    exit: classes["notification-exit"],
    exitActive: classes["notification-exit-active"],
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={isShowed}
      mountOnEnter
      unmountOnExit
      classNames={style}
      timeout={300}
    >
      <div className={classes.notification}>
        <Typography el={"h2"} size={36} color={"darkestGray"}>
          {type[0].toUpperCase() + type.slice(1)}
        </Typography>
        <Typography el={"p"}>{message}</Typography>
      </div>
    </CSSTransition>,
    document.getElementById("notification")!
  );
};

export default Notification;
