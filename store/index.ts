import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/header/headerSlice";
import weatherReducer from "./reducers/weather/weatherSlice";

const store = configureStore({
  reducer: { header: headerReducer, weather: weatherReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
