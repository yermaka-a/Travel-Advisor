import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { asyncGetPlacesData } from "../api"
import { PlacesStore } from "./types"
import { Place } from "../components/PlaceDetails/types"
import { Bounds } from "../components/Map/types"

export const usePlacesStore = create<
  PlacesStore,
  [["zustand/devtools", never]]
>(
  devtools((set, get) => ({
    type: "restaurants",
    rating: 0,
    bounds: { ne: [], sw: [] },
    places: [],

    setRating: (rating) => {
      set(() => ({ rating }))
    },
    setType: (type) => {
      set(() => ({ type }))
    },

    getPlacesData: async (sw?: Bounds["sw"], ne?: Bounds["ne"]) => {
      if (sw && ne) {
        get().bounds = { ne: ne, sw: sw }
        const data = await asyncGetPlacesData(sw, ne, get().type)
        console.log(data)
        const filteredData = data.filter((el: Place) => el.name !== "")
        set(() => ({ places: [...filteredData] }))
      } else {
        const data = await asyncGetPlacesData(
          get().bounds.sw,
          get().bounds.ne,
          get().type,
        )
        console.log(data)
        const filteredData = data.filter((el: Place) => el.name !== "")
        set(() => ({ places: [...filteredData] }))
      }
    },
  })),
)
