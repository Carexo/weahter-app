import { createSlice } from "@reduxjs/toolkit";
import { headerState } from "./headerSlice.types";
import { RootState } from "../../index";

import { searchLocations } from "./searchLocations";

const initialState: headerState = {
  searchLocationsResult: [],
  navIsOpen: false,
  status: { type: "pending" },
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    // Reducers to closing and opening the navigation
    closeNav(state) {
      state.navIsOpen = false;
    },
    openNav(state) {
      state.navIsOpen = true;
    },
  },
  // Define extra reducers for handling the laction search action
  extraReducers: (builder) => {
    builder.addCase(searchLocations.fulfilled, (state, action) => {
      // Transform action payload to the format of state
      state.searchLocationsResult = action.payload.map((result) => ({
        id: result.id,
        name: result.name,
        lat: result.lat,
        lon: result.lon,
      }));
      state.status = { type: "pending" };
    });
    // Define pending and rejected cases for the searchLocations action
    builder.addCase(searchLocations.pending, (state) => {
      state.searchLocationsResult = [];
      state.status = { type: "loading" };
    });
    builder.addCase(searchLocations.rejected, (state, action) => {
      state.status = { type: "error", message: action.payload };
    });
  },
});

// Selectors to get the state data of navigation
export const selectHeader = (state: RootState) => state.header.navIsOpen;

// Selectors to get the search locations result
export const selectSearchLocationsResult = (state: RootState) =>
  state.header.searchLocationsResult;

// Selector to get the status of the search action
export const selectStatus = (state: RootState) => state.header.status;

export const { closeNav, openNav } = headerSlice.actions;

export default headerSlice.reducer;
