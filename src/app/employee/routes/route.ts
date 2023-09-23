export interface Route {
    id?: number,
    fromCity: {
        id: number,
        cityName: string,
        hasOffice: true
    },
    toCity: {
        id: number,
        cityName: string,
        hasOffice: true
    },
    transportType: string,
    pathId?: number,
    distance?: number
}

export interface City {
    id?: number,
    cityName: string,
    hasOffice: boolean
}

export interface Path {
    id: number;
    fromCity: City;
    toCity1: City;
    toCity2?: City;
    toCity3?: City;
    toCity4?: City;
}