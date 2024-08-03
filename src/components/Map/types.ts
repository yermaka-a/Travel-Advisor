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
