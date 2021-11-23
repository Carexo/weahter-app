import React from "react";
import Link from "../../atoms/link/Link";
import classes from "./ResultLinks.module.scss";
import { ResultLinksProps } from "./ResultLinks.types";

const ResultLinks: React.FC<ResultLinksProps> = ({ links }) => {
  return (
    <ul className={classes.results}>
      {links.map((link) => (
        <li key={link}>
          <Link href={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ResultLinks;
