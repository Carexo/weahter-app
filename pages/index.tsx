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
