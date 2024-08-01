import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { asyncGetPlacesData } from "../api/index"
import { type } from "@testing-library/user-event/dist/type"

export const usePlacesStore = create(
  devtools((set, get) => ({
    type: "restaurants",
    rating: 0,
    bounds: null,
    places: [],
    setBounds: (bounds) => {
      set(() => ({ bounds }))
    },
    setRating: (rating) => {
      set(() => ({ rating }))
    },
    setType: (type) => {
      set(() => ({ type }))
    },

    getPlacesData: async (sw, ne) => {
      let data = []
      console.log(sw, ne)
      if (!sw && !ne) {
        console.log(get().bounds.sw, get().bounds.ne)
        data = await asyncGetPlacesData(
          get().bounds.sw,
          get().bounds.ne,
          get().type,
        )
      } else {
        data = await asyncGetPlacesData(sw, ne, get().type)
      }

      const filteredData = data.filter((el) => el.name !== "")
      set(() => ({ places: [...filteredData] }))
    },
  })),
)
