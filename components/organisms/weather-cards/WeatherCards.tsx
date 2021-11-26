import React from "react";
import WeatherCard from "../../molecules/weather-card/WeatherCard";
import { WeatherCardsProps } from "./WeatherCards.types";

import classes from "./WeatherCards.module.scss";
import classnames from "classnames";
import CircleIcon from "../../atoms/circle-icon/CircleIcon";
import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";

const WeatherCards: React.FC<WeatherCardsProps> = ({ forwardsWeather }) => {
  return (
    <div className={classes.cards}>
      <div className={classnames(classes["nav-temperature"], classes.celsius)}>
        <CircleIcon
          path={mdiTemperatureCelsius}
          color="#110E3C"
          onClick={() => {}}
        />
        <CircleIcon
          path={mdiTemperatureFahrenheit}
          color="#E7E7EB"
          onClick={() => {}}
        />
      </div>
      {forwardsWeather.map((weather) => {
        let date: string;

        const currentDate = new Date().toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        date = weather.date.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });

        if (currentDate === date) {
          date = "Today";
        }

        return (
          <WeatherCard
            key={weather.id}
            weatherState={weather.weatherState}
            minTemp={weather.minTemp}
            maxTemp={weather.maxTemp}
            date={date}
          />
        );
      })}
    </div>
  );
};

export default WeatherCards;
