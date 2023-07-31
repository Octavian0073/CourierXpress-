export interface Person {
    id?:number;
    personName:string;
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
