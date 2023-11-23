export interface Route {
    id?: number,
    fromCity: {
        id?: number,
        cityName: string,
        hasOffice: true
    },
    toCity: {
        id?: number,
        cityName: string,
        hasOffice: true
    },
    distance?: number
}

export interface City {
    id?: number,
    cityName: string,
    hasOffice?: boolean
}

