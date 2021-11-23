import React from "react";
import Typography from "../../atoms/typography/Typography";

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography el={"p"} color="lightGray">
        created by <b>Marceli</b> - devChallenges.io
      </Typography>
    </footer>
  );
};

export default Footer;
