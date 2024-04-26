import { createSlice } from "@reduxjs/toolkit";
import { weatherState } from "./weatherSlice.types";
import { fetchWeatherByLocation } from "./fetchWeatherByLocation";
import { RootState } from "../../index";

import { mdiTemperatureFahrenheit } from "@mdi/js";
import { mdiTemperatureCelsius } from "@mdi/js";

const initialState: weatherState = {
  data: {},
  temperatureUnit: { currentUnit: "celsius", iconPath: mdiTemperatureCelsius },
  status: { type: "pending" },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeToFahrenheit(state) {
      // If there's no forecast data, current weather data, or the unit is already Fahrenheit, do nothing
      if (
        !state.data.forecast ||
        !state.data.current ||
        state.temperatureUnit.iconPath === mdiTemperatureFahrenheit
      ) {
        return;
      }

      // Change the temperature unit to Fahrenheit
      state.temperatureUnit = {
        currentUnit: "fahrenheit",
        iconPath: mdiTemperatureFahrenheit,
      };

      // Convert the temperatures to Fahrenheit
      state.data.forecast = state.data.forecast.map((weather) => ({
        ...weather,
        mintemp: weather.mintemp_f,
        maxtemp: weather.maxtemp_f,
      }));
      state.data.current.temp = state.data.current.temp_f;
    },
    changeToCelsius(state) {
      // If there's no forecast data, current weather data, or the unit is already Celsius, do nothing
      if (
        !state.data.forecast ||
        !state.data.current ||
        state.temperatureUnit.iconPath === mdiTemperatureCelsius
      ) {
        return;
      }

      // Set the temperature unit to Celsius
      state.temperatureUnit = {
        currentUnit: "celsius",
        iconPath: mdiTemperatureCelsius,
      };

      // Convert the temperatures to Celsius
      state.data.forecast = state.data.forecast.map((weather) => ({
        ...weather,
        mintemp: weather.mintemp_c,
        maxtemp: weather.maxtemp_c,
      }));
      state.data.current.temp = state.data.current.temp_c;
    },
  },

  // Define extra reducers for handling actions related to fetching weather data
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
      // Define a function to transform the date into a short, human-readable format
      const transformDate = (date: string) => {
        const weatherDate = new Date(date);

        // Format the date into a short format (e.g., "Mon 1 Jan")
        const shortDate = weatherDate.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });

        return shortDate;
      };

      // Transform the date of each forecast day into a short format
      const forecast = action.payload.forecast.forecastday.map((weather) => {
        const shortDate = transformDate(weather.date);

        return {
          date: weather.date,
          short_date: shortDate,
          maxtemp_c: Math.round(weather.day.maxtemp_c),
          maxtemp_f: Math.round(weather.day.maxtemp_f),
          mintemp_c: Math.round(weather.day.mintemp_c),
          mintemp_f: Math.round(weather.day.mintemp_f),
          maxtemp: Math.round(weather.day.maxtemp_c),
          mintemp: Math.round(weather.day.mintemp_c),
          condition: weather.day.condition,
        };
      });

      // Transform the payload into the current weather data
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
        },
      };

      state.data = {
        ...current,
        forecast,
      };
      state.status = { type: "pending" };
    });
    // Define the pending and rejected cases for the fetchWeatherByLocation action
    builder.addCase(fetchWeatherByLocation.pending, (state) => {
      state.status = { type: "loading" };
    });
    builder.addCase(fetchWeatherByLocation.rejected, (state, action) => {
      state.status = { type: "error", message: action.payload };
    });
  },
});

// Selector to get the forecast weather data from the state
export const selectForwardsWeather = (state: RootState) => {
  if (state.weather.data.forecast) {
    return state.weather.data.forecast;
  }
};

// Selector to get the today weather data from the state
export const selectTodayWeather = (state: RootState) => {
  if (state.weather.data.current && state.weather.data.location) {
    // Define a mapping from wind compass directions to degrees
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

    // Return the current weather data, with the wind direction converted to degrees
    return {
      ...state.weather.data.current,
      wind_direction_degree:
        windCompasDegree[state.weather.data.current.wind_dir],
      title: state.weather.data.location.name,
    };
  }
};

// Selector to get the current temperature unit from the state
export const selectTemperatureUnit = (state: RootState) => {
  return state.weather.temperatureUnit;
};

// Selector to get the current status of the weather data fetch from the state
export const selectStatus = (state: RootState) => {
  return state.weather.status;
};

export const { changeToFahrenheit, changeToCelsius } = weatherSlice.actions;

export default weatherSlice.reducer;
