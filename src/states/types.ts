import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing"
import { Bounds } from "../components/Map/types"
import type { Place, PlaceDetails } from "../components/PlaceDetails/types"
import { Map } from "yandex-maps"

export interface PlacesStore {
    OpenCardXid: string
    type: string
    rating: number
    bounds: Bounds
    places: Place[] | PlaceDetails[]

    setRating: (rating: number) => void
    setType: (type: string) => void
    getPlacesData: (sw?: Bounds["sw"], ne?: Bounds["ne"]) => void
    addDetailsToPlace: (placeDetails: PlaceDetails) => void
}

export interface IGetPlace {
    place: string
    getPlaceCoords: (place: string) => void
}

export interface IGetYMapsApiRef {
    yMapsApiRef: YMapsApi | null
    setYMapsApiRef: (yMapRef: YMapsApi) => void
}

export interface IGetShow {
    show: boolean
    setShow: (value: boolean) => void
}

export interface IGetYMapRef {
    yMapRef: Map | null
    setYMapRef: (yMapRef: Map) => void
}

export interface IChosenStore {
    chosenPlaces: PlaceDetails[]
    setChosen: (chosen: PlaceDetails) => void
    deleteChosen: (chosen: PlaceDetails) => void
    clearStore: () => void
}
