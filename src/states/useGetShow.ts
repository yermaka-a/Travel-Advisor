import { create } from "zustand"
import { IGetShow } from "./types"

export const useGetShow = create<IGetShow>((set, get) => ({
    show: false,
    setShow: (value) => {
        if (get().show !== value) set({ show: value })
    },
}))
