import React, { Fragment } from "react";
import CircleIcon from "../../atoms/circle-icon/CircleIcon";
import Button from "../../atoms/button/Button";
import Image from "next/image";
import Icon from "@mdi/react";

import classes from "./HeaderInfo.module.scss";

import { mdiCheckboxBlankCircle } from "@mdi/js";
import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";
import { mdiCrosshairsGps } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

const HeaderInfo = () => {
  return (
    <Fragment>
      <div className={classes.nav}>
        <Button onClick={() => {}}>Search for place</Button>
        <CircleIcon
          path={mdiCrosshairsGps}
          color="#E7E7EB"
          onClick={() => {}}
        />
      </div>

      <div className={classes["image-container"]}>
        <Image
          src="/images/Shower.png"
          alt="shower image"
          className={classes.image}
          width={170}
          height={197}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.temperature}>
          <p>15</p>
          <Icon path={mdiTemperatureCelsius} size={2.5} color="#a09fb1" />
        </div>
        <p className={classes.type}>Shower</p>
        <div className={classes.date}>
          Today
          <Icon path={mdiCheckboxBlankCircle} size={0.2} />
          Fri 5 jan
        </div>
        <div className={classes.location}>
          <Icon path={mdiMapMarker} size={1} /> Helsinki
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderInfo;
