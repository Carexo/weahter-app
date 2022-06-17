import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {searchResult} from "./headerSlice.types";

export const searchLocations = createAsyncThunk<searchResult[],
    string,
    {
        rejectValue: string;
    }>("header/searchLocations", async (location, {rejectWithValue}) => {
    try {
        const response = await axios.get<searchResult[]>(
            `${process.env.weatherApiUrl}/search.json?key=${process.env.weatherApiKey}&q=${location}`
        );

        return response.data.filter((_, index) => index < 10);
    } catch (error) {
        return rejectWithValue("Location can't be searched please try again!");
    }
});
