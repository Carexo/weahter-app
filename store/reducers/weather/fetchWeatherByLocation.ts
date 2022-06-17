import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { currentWeather, responseCurrent } from "./weatherSlice.types";

export const fetchWeatherByLocation = createAsyncThunk<
  responseCurrent,
  string,
  {
    rejectValue: string;
  }
>("weather/fetchWeather", async (name, { rejectWithValue }) => {
  try {
    const response = await axios.get<responseCurrent>(
      `${process.env.weatherApiUrl}/forecast.json?key=${process.env.weatherApiKey}&q=${name}&days=3`
    );

    return response.data;
  } catch (error) {
    return rejectWithValue("Weather can't be fetched please try again!");
  }
});
