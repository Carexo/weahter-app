import React from "react";
import { useRouter } from "next/router";
import Link from "../../atoms/link/Link";
import classes from "./ResultLinks.module.scss";
import { ResultLinksProps } from "./ResultLinks.types";

const ResultLinks: React.FC<ResultLinksProps> = ({ locations }) => {
  const router = useRouter();
  const currentWoeid = router.query.woeid ? +router.query.woeid : undefined;

  return (
    <ul className={classes.results}>
      {locations.length > 0 &&
        locations.map((location) => (
          <li
            className={currentWoeid === location.woeid ? classes.current : ""}
            key={location.woeid}
          >
            <Link href={`/${location.woeid}`}>{location.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ResultLinks;
