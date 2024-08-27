import { THints } from "../SearchingPlaces/types"

export interface IHintListProps {
    hints: THints[]
    show: boolean
    inputFill: boolean
    foundPlaces: number
    debounceSetShow: (value: boolean) => void
}
