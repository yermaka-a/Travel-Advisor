
import {create} from  "zustand"
import { IGetYMapsApiRef } from "./types"
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing"

export const useGetYMapsApiRef = create<IGetYMapsApiRef>((set) => ({
    yMapsApiRef: null,
    setYMapsApiRef: (yMapsApiRef: YMapsApi) => set({yMapsApiRef}),
}))
