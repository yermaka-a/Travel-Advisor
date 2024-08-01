import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { asyncGetPlacesTestData } from "../api/test_data"

export const usePlacesStore = create(
  devtools((set) => ({
    places: [],
    getPlacesData: async (sw, ne) => {
      const data = await asyncGetPlacesTestData(sw, ne)
      set(() => ({ places: [...data] }))
      return data
    },
  })),
)
