import { Bounds } from "../components/Map/types"
import type { Place } from "../components/PlaceDetails/types"

export interface PlacesStore {
  type: string
  rating: number

  places: Place[]

  setRating: (rating: number) => void
  setType: (type: string) => void
  getPlacesData: (sw?: Bounds["sw"], ne?: Bounds["ne"]) => void
}
