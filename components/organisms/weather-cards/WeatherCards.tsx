import React from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classnames from "classnames";
import uniqueId from "lodash.uniqueid";

import {useAppDispatch, useAppSelector} from "../../../store/hooks";
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
import {mdiTemperatureFahrenheit} from "@mdi/js";
import {mdiTemperatureCelsius} from "@mdi/js";

const WeatherCards: React.FC = () => {
    const dispatch = useAppDispatch();
    const forwardsWeather =
        useAppSelector(selectForwardsWeather) || new Array(3).fill(null);
    const {currentUnit, iconPath} = useAppSelector(selectTemperatureUnit);
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
                    label="Switch temperature to Celsius"
                    path={mdiTemperatureCelsius}
                    color={unitColors.celsius}
                    onClick={() => {
                        dispatch(changeToCelsius());
                    }}
                />
                <CircleIcon
                    label="Switch temperature to Fahrenheit"
                    path={mdiTemperatureFahrenheit}
                    color={unitColors.fahrenheit}
                    onClick={() => {
                        dispatch(changeToFahrenheit());
                    }}
                />
            </div>
            <div className={classes["cards-wrapper"]}>
                {forwardsWeather &&
                    forwardsWeather.map((weather, index) => {
                        const id = uniqueId("card_");

                        if (!weather || loading) {
                            return (
                                <Skeleton key={id} width={120} height={176}/>
                            );
                        }
                        return (
                            <WeatherCard
                                key={id}
                                weatherState={weather.condition.text}
                                weatherImage={weather.condition.icon}
                                minTemp={weather.mintemp}
                                maxTemp={weather.maxtemp}
                                date={weather.short_date}
                                temperatureUnit={iconPath}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default WeatherCards;
