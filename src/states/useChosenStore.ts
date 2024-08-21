import { create } from "zustand"
import { IChosenStore } from "./types"

export const useChosenStore = create<IChosenStore>((set, get) => ({
    chosenPlaces: [],
    setChosen: (chosen) => {
        get().chosenPlaces.push(chosen)
        set({ chosenPlaces: get().chosenPlaces })
        console.log(get().chosenPlaces)
    }
}))
