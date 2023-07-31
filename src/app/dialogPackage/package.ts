export interface Package {
    packageWeight: 0,
    sender: {
        id: 1,
        personName: '',
        inCity: {
            id: 1,
            cityName: '',
            hasOffice: true
        },
        personPhone: '',
        role: {
            id: 3,
            roleName: "sender"
        }
    },
    receiver: {
        id: 1,
        personName: '',
        inCity: {
            id: '',
            cityName: '',
            hasOffice: true
        },
        personPhone: '',
        role: {
            id: 4,
            roleName: "receiver"
        }
    },
    route: {
        id: 1,
        fromCity: {
            id: 1,
            cityName: '',
            hasOffice: true
        },
        toCity: {
            id: 1,
            cityName: '',
            hasOffice: true
        },
        transportType: "SPECIAL",
        pathId: 0,
        distance: 0
    },
    currentCity: 1,
    price: 5,
    packageType: '',
    packageStatus: '',
    returnStarted: false,
    packageReturned: false
}

export interface Sender {
    personName: '',
    inCity: {
        id: 1,
        cityName: '',
        hasOffice: true
    },
    personPhone: '',
    role: {
        id: 3,
        roleName: "sender"
    }
}

export interface Recipient {
    personName: '',
    inCity: {
        id: 1,
        cityName: '',
        hasOffice: true
    },
    personPhone: '',
    role: {
        id: 4,
        roleName: "receiver"
    }
}