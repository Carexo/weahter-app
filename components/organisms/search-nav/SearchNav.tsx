import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  closeNav,
  selectSearchLocationsResult,
  selectStatus,
} from "../../../store/reducers/header/headerSlice";
import { searchLocations } from "../../../store/reducers/header/searchLocations";

import Search from "../../molecules/search/Search";
import ResultLinks from "../../molecules/result-links/ResultLinks";
import Button from "../../atoms/button/Button";
import Typography from "../../atoms/typography/Typography";

import Icon from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import classes from "./SearchNav.module.scss";

const SearchNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const locations = useAppSelector(selectSearchLocationsResult);
  const loadingStatus = useAppSelector(selectStatus);

  const handleClick = () => {
    dispatch(closeNav());
  };

  const handleSearch = (name: string) => {
    dispatch(searchLocations({ location: { name: name, type: "name" } }));
  };

  return (
    <Fragment>
      <nav className={classes.nav}>
        <Button onClick={handleClick} className={classes.close}>
          <Icon path={mdiClose} size={1} color="#E7E7EB" />
        </Button>
        <Search disabled={false} onClick={handleSearch} />

        {loadingStatus.type === "loading" && (
          <div className={classes.notification}>
            <Icon
              className={classes.notification}
              path={mdiDotsHorizontal}
              size={2.5}
              color="#E7E7EB"
              spin={0.8}
            />
          </div>
        )}

        {locations.length === 0 && loadingStatus.type !== "loading" && (
          <div className={classes.notification}>
            <Typography el={"p"}>No results</Typography>
          </div>
        )}

        <ResultLinks locations={locations} />
      </nav>
    </Fragment>
  );
};

export default SearchNav;
