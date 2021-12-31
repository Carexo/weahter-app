import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { searchLocationsArguments, searchResult } from "./headerSlice.types";

export const searchLocations = createAsyncThunk<
  searchResult[],
  searchLocationsArguments,
  {
    rejectValue: string;
  }
>("header/searchLocations", async (location, { rejectWithValue }) => {
  try {
    const response = await axios.get<searchResult[]>(
      `${process.env.proxyUrl}/${process.env.weatherApiUrl}/location/search/?${
        location.location.type === "name"
          ? `query=${location.location.name}`
          : `lattlong=${location.location.lat},${location.location.long}`
      }`
    );

    return response.data.filter((_, index) => index < 10);
  } catch (error) {
    return rejectWithValue("Location can't be searched please try again!");
  }
});
