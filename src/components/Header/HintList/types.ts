import { MutableRefObject } from "react"
import { THints } from "../types"

export interface IHintListProps {
    hints: THints[]
    show: boolean
    inputFill: boolean
    foundPlaces: number
    debounceSetShow: (value: boolean) => void
}
