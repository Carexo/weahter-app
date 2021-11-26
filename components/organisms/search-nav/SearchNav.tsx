import React, { Fragment } from "react";
import Search from "../../molecules/search/Search";
import ResultLinks from "../../molecules/result-links/ResultLinks";

import Icon from "@mdi/react";
import Button from "../../atoms/button/Button";
import { mdiClose } from "@mdi/js";
import classes from "./SearchNav.module.scss";

const SearchNav: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const handleClick = () => {
    handleClose();
  };

  return (
    <Fragment>
      <nav className={classes.nav}>
        <Button onClick={handleClick} className={classes.close}>
          <Icon path={mdiClose} size={1} color="#E7E7EB" />
        </Button>
        <Search disabled={false} onClick={() => {}} />
        <ResultLinks
          links={[
            "siemano",
            "xd",
            "sssggg",
            "sss",
            "siemanossss",
            "xdxxx",
            "ssssfdfd",
            "ssssdadsa",
            "fdfdfd",
            "fjdklfjlkasj",
          ]}
        />
      </nav>
    </Fragment>
  );
};

export default SearchNav;
