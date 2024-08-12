import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing"
import { Bounds } from "../components/Map/types"
import type { Place } from "../components/PlaceDetails/types"

export interface PlacesStore {
    type: string
    rating: number
    bounds: Bounds
    places: Place[]

    setRating: (rating: number) => void
    setType: (type: string) => void
    getPlacesData: (sw?: Bounds["sw"], ne?: Bounds["ne"]) => void
}

export interface IGetPlace {
    place: string
    getPlaceCoords: (place: string) => void
}

export interface IGetYMapRef {
    yMapRef: YMapsApi | null
    setYMapRef: (yMapRef: YMapsApi) => void
}

export interface IGetShow {
    show: boolean
    setShow: (value: boolean) => void
}
