import { PlacesStore } from "../../states/types"
import { Place } from "../PlaceDetails/types"

export type ListProps = Omit<PlacesStore, "setBounds" | "bounds">

export type TPlaces = Place[]
