import { TPlaces } from "../types"

export const sortPlaces = (listPlaces: TPlaces, rating: number) => {
    return listPlaces.filter((place) => {
        if (rating === 0) return true
        return parseInt(place?.rate) === rating
    })
}
