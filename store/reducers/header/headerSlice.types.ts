export interface headerState {
  searchLocationsResult: { title: string; woeid: number }[];
  navIsOpen: boolean;
  status: { type: "pending" | "loading" | "error"; message?: string };
}

export interface searchLocationsArguments {
  location:
    | { lat: number; long: number; type: "coordinates" }
    | { name: string; type: "name" };
}

export interface searchResult {
  title: string;
  location_type?: string;
  woeid: number;
  latt_long?: string;
}
