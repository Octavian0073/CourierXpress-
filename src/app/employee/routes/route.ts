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
