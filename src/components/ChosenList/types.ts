import { IContent } from "json-as-xlsx"

export enum names {
    NAME = "Название",
    ADDRESS = "Адрес",
    DESCRITION = "Описание",
    IMAGE = "Ссылка на изображение",
    RATE = "Рейтинг известности",
    POINT = "Координаты",
    URL = "Сайт",
    VOYAGE = "WikiVoyage",
    WIKIPERIDA = "Wikipedia"
}

export enum keys {
    name = "name",
    address = "address",
    description = "description",
    image = "image",
    rate = "rate",
    point = "point",
    url = "url",
    voyage = "voyage",
    wikipeida = "wikipedia"
}

export interface IContentExtended extends IContent {
    name: string
    address: {
        house_number: string
        suburb: string
        city: string
        state: string
        country: string
    }
    description: string
    image: string
    rate: string
    point: {
        lat: number
        lon: number
    }
    url: string
    voyage: string
    wikipeida: string
    wikipedia_extracts: {
        text: string
        title: string
        html: string
    }
}
