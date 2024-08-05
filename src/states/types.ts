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
  setPlace: (place: string) => void
}
