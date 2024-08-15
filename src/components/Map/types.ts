import { IOptionManager } from "yandex-maps"
import { PlacesStore } from "../../states/types"

export interface Bounds {
    ne: number[]
    sw: number[]
}

export type getPlacesData = Pick<PlacesStore, "getPlacesData">

// export type GetBounds = () => Bounds

// export interface MapEvent extends Event {
//   originalEvent: React.MouseEvent<HTMLElement>
//   get: (str: "target" | "coords") => {
//     getBounds: GetBounds
//     lat: number
//     lng: number
//   }
// }

export interface ITypeSelectorOptions extends IOptionManager {
    float: string
    adjustMapMargin: boolean
    collapseOnBlur: boolean
    collapseTimeout: number
    expandOnClick: boolean
    floatIndex: number
    layout: string | (() => void)
    maxWidth: number | number[]
    panoramsItemMetode: string
    position: {
        bottom: number
        left: number
        right: number
        top: number
    }
    visible: boolean
    state: object
}
