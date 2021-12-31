import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { currentWeather } from "./weatherSlice.types";

export const fetchWeatherByLocation = createAsyncThunk<
  currentWeather,
  string,
  {
    rejectValue: string;
  }
>("weather/fetchWeather", async (woeid, { rejectWithValue }) => {
  try {
    const response = await axios.get<currentWeather>(
      `${process.env.proxyUrl}/${process.env.weatherApiUrl}/location/${woeid}/`
    );

    return response.data;
  } catch (error) {
    return rejectWithValue("Weather can't be fetched please try again!");
  }
});
