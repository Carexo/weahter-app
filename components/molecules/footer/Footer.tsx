import React from "react";
import Typography from "../../atoms/typography/Typography";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Typography el={"p"} color="lightGray" size={14}>
        created by{" "}
        <b>
          <a href="https://github.com/Carexo" target="_blank" rel="noopener">
            Carexo
          </a>
        </b>{" "}
        - designed by devChallenges.io
      </Typography>
    </footer>
  );
};

export default Footer;
