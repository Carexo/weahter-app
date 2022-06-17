export interface headerState {
    searchLocationsResult: { id:number; name: string; lat: number; lon: number; }[];
    navIsOpen: boolean;
    status: { type: "pending" | "loading" | "error"; message?: string };
}

export interface searchResult {
    id: number;
    name: string;
    lat: number;
    lon: number;
}
