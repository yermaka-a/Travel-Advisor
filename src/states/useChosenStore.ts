import { create } from "zustand"
import { IChosenStore } from "./types"
import { persist, createJSONStorage } from "zustand/middleware"
export const useChosenStore = create(
    persist<IChosenStore>(
        (set, get) => ({
            chosenPlaces: [],
            setChosen: (chosen) => {
                const isExist = get().chosenPlaces.some((el) => el.xid === chosen.xid)
                if (!isExist) {
                    get().chosenPlaces.push(chosen)
                    set({ chosenPlaces: [...get().chosenPlaces] })
                }
            },
            deleteChosen: (chosen) => {
                set({ chosenPlaces: [...get().chosenPlaces.filter((place) => place.xid !== chosen.xid)] })
            },
            clearStore: () => {
                set({ chosenPlaces: [] })
            }
        }),
        {
            name: "chosen-store",
            storage: createJSONStorage(() => localStorage)
        }
    )
)
