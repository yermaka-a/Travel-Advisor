import {create} from  "zustand"
import {IGetPlace} from "./types"

export const useGetPlace = create<IGetPlace>((set) => ({
    place: "",
    getPlaceCoords: (place: string) =>{
        set({place})},
}))
