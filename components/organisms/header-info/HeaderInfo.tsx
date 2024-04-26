import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openNav } from "../../../store/reducers/header/headerSlice";
import { searchLocations } from "../../../store/reducers/header/searchLocations";
import {
  selectStatus,
  selectTemperatureUnit,
  selectTodayWeather,
} from "../../../store/reducers/weather/weatherSlice";

import CircleIcon from "../../atoms/circle-icon/CircleIcon";
import Button from "../../atoms/button/Button";
import Image from "next/image";
import Icon from "@mdi/react";

import classes from "./HeaderInfo.module.scss";

import { mdiCrosshairsGps } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import Typography from "../../atoms/typography/Typography";

const HeaderInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const todayWeather = useAppSelector(selectTodayWeather);
  const { iconPath } = useAppSelector(selectTemperatureUnit);
  const status = useAppSelector(selectStatus);

  const handleOpenNav = () => {
    dispatch(openNav());
  };

  // Define a handler for getting the user's current location
  const handleGetLocation = () => {
    // Use the Geolocation API to get the user's current position
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      // Dispatch an action to search for locations near the user's current position
      dispatch(searchLocations(`${lat},${long}`));
      dispatch(openNav());
    });
  };

  // Determine whether the app is currently loading data or if there is no weather data
  const loading = status.type === "loading" || !todayWeather;

  return (
    <Fragment>
      <div className={classes.header}>
        <Button onClick={handleOpenNav}>Search for place</Button>
        <CircleIcon
          label="Search place from your geolocation"
          path={mdiCrosshairsGps}
          color="#E7E7EB"
          onClick={handleGetLocation}
        />
      </div>
      <div className={classes["image-container"]}>
        {/* If the app is loading, render a skeleton. Otherwise, render the weather image. */}
        {loading ? (
          <Skeleton circle width={190} height={190} />
        ) : (
          <Image
            src={`https:${todayWeather.condition.icon}`}
            alt={`${todayWeather.condition.text} image`}
            className={classes.image}
            width={198}
            height={198}
          />
        )}
      </div>
      <div className={classes.description}>
        <div className={classes.temperature}>
          {/* If the app is loading, render a skeleton. Otherwise, render the weather condition. */}
          {loading ? (
            <Skeleton width={192} height={170} />
          ) : (
            <>
              <Typography el={"p"} size={144}>
                {todayWeather.temp}
              </Typography>
              <Icon path={iconPath} size={2.5} color="#a09fb1" />
            </>
          )}
        </div>

        {/*  If the app is loading, render a skeleton. Otherwise, render the weather condition. */}
        {loading ? (
          <Skeleton width={130} height={42} />
        ) : (
          <Typography el="p" color="lightGray" size={36}>
            {todayWeather.condition.text}
          </Typography>
        )}

        {/*  If the app is loading, render a skeleton. Otherwise, render the weather date. */}
        {loading ? (
          <Skeleton width={50} height={20} />
        ) : (
          <Typography el={"p"} color={"gray"} size={18}>
            {todayWeather.short_date}
          </Typography>
        )}

        {/*  If the app is loading, render a skeleton. Otherwise, render the weather location. */}
        {loading ? (
          <Skeleton width={94} height={27} />
        ) : (
          <div className={classes.location}>
            <Icon path={mdiMapMarker} size={1} /> {todayWeather.title}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default HeaderInfo;
