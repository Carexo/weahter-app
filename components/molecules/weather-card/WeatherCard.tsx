import React from "react";
import { WeatherCardProps } from "./WeatherCard.types";
import classes from "./WeatherCard.module.scss";
import Image from "next/image";
import Icon from "@mdi/react";

import Typography from "../../atoms/typography/Typography";

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherState,
    weatherImage,
  minTemp,
  maxTemp,
  date,
  temperatureUnit,
}) => {
  return (
    <div className={classes["weather-card"]}>
      <Typography el={"p"}>{date}</Typography>

      <Image
        src={`https:${weatherImage}`}
        alt={weatherState}
        className={classes.image}
        width={63}
        height={63}
      />
      <div className={classes.temperatures}>
        <div className={classes.temperature}>
          <Typography el={"p"}>{maxTemp}</Typography>
          <Icon path={temperatureUnit} size={0.7} />
        </div>
        <div className={classes.temperature}>
          <Typography el={"p"}>{minTemp}</Typography>
          <Icon path={temperatureUnit} size={0.7} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
