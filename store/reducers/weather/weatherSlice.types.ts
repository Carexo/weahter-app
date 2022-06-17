export interface weatherState {
    data: Partial<currentWeather>;
    temperatureUnit: { currentUnit: "celsius" | "fahrenheit"; iconPath: string };
    status: { type: "pending" | "loading" | "error"; message?: string };
}

export interface responseForecast {
    date: string;
    day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
            icon: string;
            text: string;
        }
    }
}

export interface responseCurrent {
    location: {
        name: string;
    };
    current: {
        last_updated: string;
        temp: number;
        temp_c: number;
        temp_f: number;
        condition: {
            text: string,
            icon: string;
        };
        wind_kph: number;
        wind_dir:
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
        pressure_mb: number;
        humidity: number;
        vis_km: number;
        short_date: string;
    };
    forecast: {
        forecastday: responseForecast[];
    }
}

export interface forecast {
    date: string;
    maxtemp: number;
    mintemp: number;
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: {
        icon: string;
        text: string;
    }
}

export interface currentWeather {
    location: {
        name: string;
    };
    current: {
        last_updated: string;
        temp: number;
        temp_c: number;
        temp_f: number;
        condition: {
            text: string,
            icon: string;
        };
        wind_kph: number;
        wind_dir:
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
        pressure_mb: number;
        humidity: number;
        vis_km: number;
        short_date: string;
    };
    forecast: forecast[];
}
