import {Fragment, useEffect} from "react";
import {useRouter} from "next/router";
import type {NextPage} from "next";

import {useAppDispatch} from "../store/hooks";
import {fetchWeatherByLocation} from "../store/reducers/weather/fetchWeatherByLocation";
import {closeNav, openNav} from "../store/reducers/header/headerSlice";

import WeatherCards from "../components/organisms/weather-cards/WeatherCards";
import Hightlights from "../components/organisms/hightlights/Hightlights";
import {searchLocations} from "../store/reducers/header/searchLocations";

const Weather: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {name} = router.query;

    useEffect(() => {
        if (!name) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                dispatch(
                    fetchWeatherByLocation(`${lat},${long}`)
                );
            });
            
            return;
        }


        if (typeof name === "string") {
            dispatch(fetchWeatherByLocation(name));
        }
        dispatch(closeNav());
    }, [name, dispatch]);

    return (
        <Fragment>
            <WeatherCards/>
            <Hightlights/>
        </Fragment>
    );
};

export default Weather;
