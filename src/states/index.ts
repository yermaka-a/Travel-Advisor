import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { asyncGetPlacesData } from "../api"
import { PlacesStore } from "./types"
import { Place } from "../components/PlaceDetails/types"

export const usePlacesStore = create<
  PlacesStore,
  [["zustand/devtools", never]]
>(
  devtools((set, get) => ({
    type: "restaurants",
    rating: 0,
    places: [],

    setRating: (rating) => {
      set(() => ({ rating }))
    },
    setType: (type) => {
      set(() => ({ type }))
    },

    getPlacesData: async (sw?, ne?) => {
      const data = await asyncGetPlacesData(sw, ne, get().type)
      console.log(data)
      const filteredData = data.filter((el: Place) => el.name !== "")
      set(() => ({ places: [...filteredData] }))
    },
  })),
)
