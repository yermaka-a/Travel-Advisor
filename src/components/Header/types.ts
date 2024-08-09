import { IDataManager } from "yandex-maps"

export type THints = {
    id: string
    name: string
    coordinates:  [number[], number[]]
    description: string
    text: string
}

interface IGeocoderMetaData  {
    Address: {
        Components: [{
            Kind: string
            Name: string
        }]
        country_code: string
        formatted: string
    }
    AddressDetails: {
        Country: {
            AddressLine: string
            Country: object
            CountryName: string
            CountryNameCode: string
        }
    }
    kind: string
    precision: string
    text: string
}

interface IData {
    balloonContent: string
    balloonContentBody: string
    boundedBy: [number[], number[]]
    description: string
    metaDataProperty: {
        GeocoderMetaData: IGeocoderMetaData
    }
    name: string
    text: string
    uriMetaData:{
        URI: {
            uri:    string
        }
        URIs:[{
            uri: string}]
    }
}


export interface IExtDataManager extends IDataManager {
    getAll: () => IData
}
