export interface WeatherCardsProps {
  forwardsWeather: {
    id: string;
    date: Date;
    minTemp: number;
    maxTemp: number;
    weatherState: string;
  }[];
}
