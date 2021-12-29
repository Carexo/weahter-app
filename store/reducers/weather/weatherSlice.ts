import { createSlice } from "@reduxjs/toolkit";
import { weatherState } from "./weatherSlice.types";
import { fetchWeatherByLocation } from "./fetchWeatherByLocation";
import { RootState } from "../../index";

import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";

const initialState: weatherState = {
  currentWeather: {},
  temperatureUnit: { currentUnit: "celsius", iconPath: mdiTemperatureCelsius },
  status: { type: "pending" },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeToFahrenheit(state) {
      if (
        !state.currentWeather.consolidated_weather ||
        state.temperatureUnit.iconPath === mdiTemperatureFahrenheit
      ) {
        return;
      }

      state.temperatureUnit = {
        currentUnit: "fahrenheit",
        iconPath: mdiTemperatureFahrenheit,
      };
      const toFahrenheit = (temp: number) => Math.round(temp * (9 / 5) + 32);

      state.currentWeather.consolidated_weather =
        state.currentWeather.consolidated_weather.map((weather) => ({
          ...weather,
          max_temp: toFahrenheit(weather.max_temp),
          min_temp: toFahrenheit(weather.min_temp),
          the_temp: toFahrenheit(weather.the_temp),
        }));
    },
    changeToCelsius(state) {
      if (
        !state.currentWeather.consolidated_weather ||
        state.temperatureUnit.iconPath === mdiTemperatureCelsius
      ) {
        return;
      }

      state.temperatureUnit = {
        currentUnit: "celsius",
        iconPath: mdiTemperatureCelsius,
      };
      const toCelsius = (temp: number) => Math.round((temp - 32) * (5 / 9));

      state.currentWeather.consolidated_weather =
        state.currentWeather.consolidated_weather.map((weather) => ({
          ...weather,
          max_temp: toCelsius(weather.max_temp),
          min_temp: toCelsius(weather.min_temp),
          the_temp: toCelsius(weather.the_temp),
        }));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
      const consolidated_weather = action.payload.consolidated_weather.map(
        (weather) => {
          let short_date: string;
          const currentDate = new Date();
          const todayDateString = `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
          }-${currentDate.getDate() < 10 ? "0" : ""}${currentDate.getDate()}`;

          const todayDate = new Date(todayDateString);

          const tomorrowDate = new Date(todayDateString);
          tomorrowDate.setDate(todayDate.getDate() + 1);

          const weatherDate = new Date(weather.applicable_date);

          short_date = weatherDate.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });

          if (tomorrowDate.getTime() === weatherDate.getTime()) {
            short_date = "Tomorrow";
          } else if (todayDate.getTime() === weatherDate.getTime()) {
            short_date = "Today";
          }

          return {
            ...weather,
            short_date,
            wind_speed: Math.round(weather.wind_speed),
            air_pressure: Math.round(weather.air_pressure),
            humidity: Math.round(weather.humidity),
            visibility: Math.round(weather.visibility),
            max_temp: Math.round(weather.max_temp),
            min_temp: Math.round(weather.min_temp),
            the_temp: Math.round(weather.the_temp),
          };
        }
      );
      state.currentWeather = { ...action.payload, consolidated_weather };
      state.status = { type: "pending" };
    });
    builder.addCase(fetchWeatherByLocation.pending, (state) => {
      state.status = { type: "loading" };
    });
    builder.addCase(fetchWeatherByLocation.rejected, (state, action) => {
      state.status = { type: "error", message: action.payload };
    });
  },
});

export const selectForwardsWeather = (state: RootState) => {
  if (state.weather.currentWeather.consolidated_weather) {
    return state.weather.currentWeather.consolidated_weather.filter(
      (_, index) => index > 0 && index < 6
    );
  }
};

export const selectTodayWeather = (state: RootState) => {
  if (state.weather.currentWeather.consolidated_weather) {
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
      ...state.weather.currentWeather.consolidated_weather[0],
      wind_direction_degree:
        windCompasDegree[
          state.weather.currentWeather.consolidated_weather[0]
            .wind_direction_compass
        ],
      title: state.weather.currentWeather.title,
    };
  }
};

export const selectTemperatureUnit = (state: RootState) => {
  return state.weather.temperatureUnit;
};

export const selectStatus = (state: RootState) => {
  return state.weather.status;
};

export const { changeToFahrenheit, changeToCelsius } = weatherSlice.actions;

export default weatherSlice.reducer;
