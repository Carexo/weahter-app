import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classnames from "classnames";
import uniqueId from "lodash.uniqueid";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  changeToCelsius,
  changeToFahrenheit,
  selectForwardsWeather,
  selectStatus,
  selectTemperatureUnit,
} from "../../../store/reducers/weather/weatherSlice";

import WeatherCard from "../../molecules/weather-card/WeatherCard";
import CircleIcon from "../../atoms/circle-icon/CircleIcon";
import classes from "./WeatherCards.module.scss";
import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";

const WeatherCards: React.FC = () => {
  const dispatch = useAppDispatch();
  const forwardsWeather =
    useAppSelector(selectForwardsWeather) || new Array(5).fill(null);
  const { currentUnit, iconPath } = useAppSelector(selectTemperatureUnit);
  const status = useAppSelector(selectStatus);

  const loading = status.type === "loading";

  const unitColors = {
    fahrenheit: currentUnit === "fahrenheit" ? "#110E3C" : "#E7E7EB",
    celsius: currentUnit === "celsius" ? "#110E3C" : "#E7E7EB",
  };

  return (
    <div className={classes.cards}>
      <div
        className={classnames(classes["nav-temperature"], classes[currentUnit])}
      >
        <CircleIcon
          path={mdiTemperatureCelsius}
          color={unitColors.celsius}
          onClick={() => {
            dispatch(changeToCelsius());
          }}
        />
        <CircleIcon
          path={mdiTemperatureFahrenheit}
          color={unitColors.fahrenheit}
          onClick={() => {
            dispatch(changeToFahrenheit());
          }}
        />
      </div>
      {forwardsWeather &&
        forwardsWeather.map((weather, index) => {
          if (!weather || loading) {
            return (
              <Skeleton key={uniqueId("card_")} width={120} height={176} />
            );
          }
          return (
            <WeatherCard
              key={weather.id}
              weatherState={weather.weather_state_name}
              minTemp={weather.min_temp}
              maxTemp={weather.max_temp}
              date={weather.short_date}
              temperatureUnit={iconPath}
            />
          );
        })}
    </div>
  );
};

export default WeatherCards;
