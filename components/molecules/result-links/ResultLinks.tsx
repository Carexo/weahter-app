import React from "react";
import { useRouter } from "next/router";
import Link from "../../atoms/link/Link";
import classes from "./ResultLinks.module.scss";
import { ResultLinksProps } from "./ResultLinks.types";

const ResultLinks: React.FC<ResultLinksProps> = ({ locations }) => {
  const router = useRouter();
  const currentLocation = router.query.name;

  return (
    <ul className={classes.results}>
      {locations.length > 0 &&
        locations.map((location) => (
          <li
            className={currentLocation === location.name ? classes.current : ""}
            key={location.id}
          >
            <Link href={`/${location.name}`}>{location.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ResultLinks;
