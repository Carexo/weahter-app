import React from "react";
import Typography from "../../atoms/typography/Typography";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Typography el={"p"} color="lightGray" size={14}>
        created by <b>Marceli</b> - devChallenges.io
      </Typography>
    </footer>
  );
};

export default Footer;
