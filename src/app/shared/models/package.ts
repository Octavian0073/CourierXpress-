import { Route } from "./route"

export interface Shipment {
    id?: number,
    packageWeight: number,
    sender: Sender,
    receiver: Recipient,
    route:Route,
    currentCity: number,
    price: number,
    packageType: string,
    packageStatus: string,
    returnStarted: boolean,
    packageReturned: boolean
}

export interface Sender {
    id?:number,
    personName: string,
    inCity: {
        id: number,
        cityName: string,
        hasOffice: boolean
    },
    personPhone: string,
    role: {
        id: number,
        roleName: string
    }
}

export interface Recipient {
    id?:number,
    personName: string,
    inCity: {
        id: number,
        cityName: string,
        hasOffice: boolean
    },
    personPhone: string,
    role: {
        id: number,
        roleName: string
    }
}

export interface Status {
    packageStatus: string;
}