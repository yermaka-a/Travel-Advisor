import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing"
import {create} from  "zustand"
import { IGetYMapRef } from "./types"

export const useGetYMapRef = create<IGetYMapRef>((set) => ({
    yMapRef: null,
    setYMapRef: (yMapRef: YMapsApi) => set({yMapRef}),
}))
