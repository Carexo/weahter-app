import React from "react";
import Skeleton from "react-loading-skeleton";

import Hightlight from "../../molecules/hightlight/Hightlight";
import Typography from "../../atoms/typography/Typography";

import { useAppSelector } from "../../../store/hooks";
import {
  selectStatus,
  selectTodayWeather,
} from "../../../store/reducers/weather/weatherSlice";
import { mdiNavigation } from "@mdi/js";
import Icon from "@mdi/react";

import classes from "./Hightlights.module.scss";

const Hightlights: React.FC = () => {
  const weatherToday = useAppSelector(selectTodayWeather);
  const status = useAppSelector(selectStatus);

  const loading = status.type === "loading" || !weatherToday;

  const HightlightsSkeleton = (
    <>
      <Skeleton height={204} width={328} />
      <Skeleton height={204} width={328} />
      <Skeleton height={160} width={328} />
      <Skeleton height={160} width={328} />
    </>
  );

  // @ts-ignore
  return (
    <section className={classes.hightlights}>
      <Typography el={"p"} size={24} weight={700}>
        Today&apos;s Hightlights
      </Typography>
      {loading ? (
        HightlightsSkeleton
      ) : (
        <>
          <Hightlight
            title={"Wind Status"}
            value={weatherToday.wind_speed}
            unit={"mph"}
            size={"extended"}
          >
            <div className={classes["wind-direction"]}>
              <span role="presentation">
                <Icon
                  path={mdiNavigation}
                  color={"#E7E7EB"}
                  size={0.7}
                  rotate={weatherToday.wind_direction_degree}
                />
              </span>
              <Typography el={"p"}>
                {weatherToday.wind_direction_compass}
              </Typography>
            </div>
          </Hightlight>
          <Hightlight
            title={"Humidity"}
            value={weatherToday.humidity}
            unit={"%"}
            size={"extended"}
          >
            <div className={classes["humidity-bar"]}>
              <div className={classes.scale}>
                <Typography el={"p"} size={12}>
                  0
                </Typography>
                <Typography el={"p"} size={12}>
                  50
                </Typography>
                <Typography el={"p"} size={12}>
                  100
                </Typography>
              </div>
              <div
                className={classes.bar}
                style={{
                  "--humidity-width": `${weatherToday.humidity * 0.14}rem`,
                }}
                role="presentation"
              ></div>

              <Typography el={"p"} size={12}>
                %
              </Typography>
            </div>
          </Hightlight>
          <Hightlight
            title={"Visibility"}
            value={weatherToday.visibility}
            unit={"miles"}
            size={"regular"}
          />
          <Hightlight
            title={"Air Pressure"}
            value={weatherToday.air_pressure}
            unit={"mb"}
            size={"regular"}
          />
        </>
      )}
    </section>
  );
};

export default Hightlights;
