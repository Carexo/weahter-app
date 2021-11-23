import React from "react";
import { WeatherCardProps } from "./WeatherCard.types";
import classes from "./WeatherCard.module.scss";
import Image from "next/image";
import Icon from "@mdi/react";

import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";

import Typography from "../../atoms/typography/Typography";

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherState,
  minTemp,
  maxTemp,
  date,
}) => {
  return (
    <div className={classes["weather-card"]}>
      <Typography el={"p"}>{date}</Typography>

      <Image
        src={`/images/${weatherState.replace(" ", "")}.png`}
        alt={weatherState}
        className={classes.image}
        width={55}
        height={63}
      />
      <div className={classes.temperatures}>
        <div className={classes.temperature}>
          <Typography el={"p"}>{maxTemp}</Typography>
          <Icon path={mdiTemperatureCelsius} size={0.7} />
        </div>
        <div className={classes.temperature}>
          <Typography el={"p"}>{minTemp}</Typography>
          <Icon path={mdiTemperatureCelsius} size={0.7} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
