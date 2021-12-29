export interface weatherState {
  currentWeather: Partial<currentWeather>;
  temperatureUnit: { currentUnit: "celsius" | "fahrenheit"; iconPath: string };
  status: { type: "pending" | "loading" | "error"; message?: string };
}

export interface weatherForward {
  short_date: string;
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass:
    | "N"
    | "NNE"
    | "NE"
    | "ENE"
    | "E"
    | "ESE"
    | "SE"
    | "SSE"
    | "S"
    | "SSW"
    | "SW"
    | "WSW"
    | "W"
    | "WNW"
    | "NW"
    | "NNW";
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface currentWeather {
  consolidated_weather: weatherForward[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
  };
  sources: { title: string; slug: string; ulr: string; crawl_rate: number }[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}
