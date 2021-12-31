import React, { useState } from "react";
import { SearchProps } from "./Search.types";
import classes from "./Search.module.scss";

import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const Search: React.FC<SearchProps> = ({ onClick, disabled }) => {
  const [value, setValue] = useState("");

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    onClick(value);
    setValue("");
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <form className={classes.search}>
      <div className={classes.input}>
        <Icon path={mdiMagnify} size={0.8} color="#616475" />
        <Input title="search location" value={value} onChange={handleChange} />
      </div>
      <Button onClick={handleClick} type="submit" disabled={disabled}>
        Search
      </Button>
    </form>
  );
};

export default Search;
