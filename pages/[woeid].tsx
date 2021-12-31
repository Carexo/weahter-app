import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { useAppDispatch } from "../store/hooks";
import { fetchWeatherByLocation } from "../store/reducers/weather/fetchWeatherByLocation";
import { closeNav } from "../store/reducers/header/headerSlice";

import WeatherCards from "../components/organisms/weather-cards/WeatherCards";
import Hightlights from "../components/organisms/hightlights/Hightlights";

const Weather: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { woeid } = router.query;

  useEffect(() => {
    if (!woeid || typeof woeid !== "string") {
      return;
    }
    dispatch(fetchWeatherByLocation(woeid));
    dispatch(closeNav());
  }, [woeid, dispatch]);

  return (
    <Fragment>
      <WeatherCards />
      <Hightlights />
    </Fragment>
  );
};

export default Weather;
