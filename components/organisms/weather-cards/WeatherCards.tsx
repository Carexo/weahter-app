import React from "react";
import WeatherCard from "../../molecules/weather-card/WeatherCard";
import { WeatherCardsProps } from "./WeatherCards.types";

import classes from "./WeatherCards.module.scss";

const WeatherCards: React.FC<WeatherCardsProps> = ({ forwardsWeather }) => {
  return (
    <div className={classes.cards}>
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
