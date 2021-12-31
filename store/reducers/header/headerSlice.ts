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
    closeNav(state) {
      state.navIsOpen = false;
    },
    openNav(state) {
      state.navIsOpen = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchLocations.fulfilled, (state, action) => {
      state.searchLocationsResult = action.payload.map((result) => ({
        title: result.title,
        woeid: result.woeid,
      }));
      state.status = { type: "pending" };
    });
    builder.addCase(searchLocations.pending, (state) => {
      state.searchLocationsResult = [];
      state.status = { type: "loading" };
    });
    builder.addCase(searchLocations.rejected, (state, action) => {
      state.status = { type: "error", message: action.payload };
    });
  },
});

export const selectHeader = (state: RootState) => state.header.navIsOpen;
export const selectSearchLocationsResult = (state: RootState) =>
  state.header.searchLocationsResult;
export const selectStatus = (state: RootState) => state.header.status;

export const { closeNav, openNav } = headerSlice.actions;

export default headerSlice.reducer;
