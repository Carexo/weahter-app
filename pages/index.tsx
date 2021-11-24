import { Fragment } from "react";
import type { NextPage } from "next";
import SearchNav from "../components/organisms/search-nav/SearchNav";
import HeaderInfo from "../components/organisms/header-info/HeaderInfo";
import Header from "../components/template/header/Header";
import WeatherCards from "../components/organisms/weather-cards/WeatherCards";
import Hightlights from "../components/organisms/hightlights/Hightlights";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header>
        {/*<SearchNav />*/}
        {/*<HeaderInfo />*/}
      </Header>
      <WeatherCards
        forwardsWeather={[
          {
            weatherState: "Clear",
            maxTemp: 10,
            minTemp: 5,
            date: new Date("2021-11-21"),
            id: "1",
          },
          {
            weatherState: "Clear",
            maxTemp: 10,
            minTemp: 5,
            date: new Date("2021-11-21"),
            id: "2",
          },
          {
            weatherState: "Clear",
            maxTemp: 10,
            minTemp: 5,
            date: new Date("2021-11-21"),
            id: "3",
          },
          {
            weatherState: "Clear",
            maxTemp: 10,
            minTemp: 5,
            date: new Date("2021-11-21"),
            id: "4",
          },
          {
            weatherState: "Clear",
            maxTemp: 10,
            minTemp: 5,
            date: new Date("2021-11-21"),
            id: "5",
          },
        ]}
      />
      <Hightlights
        windStatus={"7"}
        humidity={"84"}
        visibility={"6,4"}
        airPressure={"996"}
      />
    </Fragment>
  );
};

export default Home;
