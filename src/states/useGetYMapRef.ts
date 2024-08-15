import { create } from "zustand"
import { IGetYMapRef } from "./types"


export const useGetYMapRef = create<IGetYMapRef>((set) => ({
    yMapRef: null,
    setYMapRef: (yMapRef) => set({ yMapRef })
}))
