import {createSlice} from "@reduxjs/toolkit";
import {responseForecast, weatherState} from "./weatherSlice.types";
import {fetchWeatherByLocation} from "./fetchWeatherByLocation";
import {RootState} from "../../index";

import {mdiTemperatureFahrenheit} from "@mdi/js";
import {mdiTemperatureCelsius} from "@mdi/js";

const initialState: weatherState = {
    data: {},
    temperatureUnit: {currentUnit: "celsius", iconPath: mdiTemperatureCelsius},
    status: {type: "pending"},
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        changeToFahrenheit(state) {
            if (
                !state.data.forecast || !state.data.current ||
                state.temperatureUnit.iconPath === mdiTemperatureFahrenheit
            ) {
                return;
            }

            state.temperatureUnit = {
                currentUnit: "fahrenheit",
                iconPath: mdiTemperatureFahrenheit,
            };

            state.data.forecast =
                state.data.forecast.map((weather) => ({
                    ...weather,
                    mintemp: weather.mintemp_f,
                    maxtemp: weather.maxtemp_f,
                }));
            state.data.current.temp = state.data.current.temp_f;
        },
        changeToCelsius(state) {
            if (
                !state.data.forecast || !state.data.current ||
                state.temperatureUnit.iconPath === mdiTemperatureCelsius
            ) {
                return;
            }

            state.temperatureUnit = {
                currentUnit: "celsius",
                iconPath: mdiTemperatureCelsius,
            };

            state.data.forecast =
                state.data.forecast.map((weather) => ({
                    ...weather,
                    mintemp: weather.mintemp_c,
                    maxtemp: weather.maxtemp_c,
                }));
            state.data.current.temp = state.data.current.temp_c;

        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchWeatherByLocation.fulfilled, (state, action) => {

            const transformDate = (date: string) => {
                const weatherDate = new Date(date)

                const shortDate = weatherDate.toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                });


                return shortDate
            }


            const forecast = action.payload.forecast.forecastday.map(
                (weather) => {
                    const shortDate = transformDate(weather.date)

                    return {
                        date: weather.date,
                        short_date: shortDate,
                        maxtemp_c: Math.round(weather.day.maxtemp_c),
                        maxtemp_f: Math.round(weather.day.maxtemp_f),
                        mintemp_c: Math.round(weather.day.mintemp_c),
                        mintemp_f: Math.round(weather.day.mintemp_f),
                        maxtemp: Math.round(weather.day.maxtemp_c),
                        mintemp: Math.round(weather.day.mintemp_c),
                        condition: weather.day.condition
                    };
                }
            );

            const current = {
                location: action.payload.location,
                current: {
                    ...action.payload.current,
                    short_date: transformDate(action.payload.current.last_updated),
                    wind_kph: Math.round(action.payload.current.wind_kph),
                    temp_c: Math.round(action.payload.current.temp_c),
                    temp_f: Math.round(action.payload.current.temp_f),
                    temp: Math.round(action.payload.current.temp_c),
                    pressure_mb: Math.round(action.payload.current.pressure_mb),
                    vis_km: Math.round(action.payload.current.vis_km),
                }
            }

            state.data = {
                ...current, forecast
            }
            state.status = {type: "pending"};
        });
        builder.addCase(fetchWeatherByLocation.pending, (state) => {
            state.status = {type: "loading"};
        });
        builder.addCase(fetchWeatherByLocation.rejected, (state, action) => {
            state.status = {type: "error", message: action.payload};
        });
    },
});

export const selectForwardsWeather = (state: RootState) => {
    if (state.weather.data.forecast) {
        return state.weather.data.forecast;
    }
};

export const selectTodayWeather = (state: RootState) => {
    if (state.weather.data.current && state.weather.data.location) {
        const windCompasDegree = {
            N: 0,
            NNE: 22.5,
            NE: 45,
            ENE: 67.5,
            E: 90,
            ESE: 112.5,
            SE: 135,
            SSE: 157.5,
            S: 180,
            SSW: 202.5,
            SW: 225,
            WSW: 247.5,
            W: 270,
            WNW: 292.5,
            NW: 315,
            NNW: 337.5,
        };

        return {
            ...state.weather.data.current,
            wind_direction_degree:
                windCompasDegree[
                    state.weather.data.current.wind_dir
                    ],
            title: state.weather.data.location.name
        };
    }
};

export const selectTemperatureUnit = (state: RootState) => {
    return state.weather.temperatureUnit;
};

export const selectStatus = (state: RootState) => {
    return state.weather.status;
};

export const {changeToFahrenheit, changeToCelsius} = weatherSlice.actions;

export default weatherSlice.reducer;
