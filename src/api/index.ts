import axios from "axios"

import ENV from "../config"

import { PlaceDetails } from "../components/PlaceDetails/types"
import { Bounds } from "../components/Map/types"

const URL = ENV.OTM_PLACES_URL
const PLACE_URL = ENV.OTM_PLACE_URL

export const asyncGetPlacesData = async (sw?: Bounds["sw"], ne?: Bounds["ne"], ...args: string[]) => {
    try {
        if (!sw || !ne || !URL) {
            new Error("sw or ne or URL are undefined")
        } else {
            const options = {
                method: "GET",

                params: {
                    lon_min: ne[1],
                    lat_min: ne[0],
                    lon_max: sw[1],
                    lat_max: sw[0],
                    kinds: args[0],
                    format: "json",
                    limit: 100,
                    apikey: ENV.OTM_KEY
                }
            }

            const { data } = await axios.get(URL, options)

            return data
        }
    } catch (error) {
        console.error(error)
    }
}

export const getPlaceDetails = async (id: string) => {
    try {
        const { data } = await axios.get<Promise<PlaceDetails>>(`${PLACE_URL}${id}`, {
            params: {
                apikey: ENV.OTM_KEY
            }
        })

        return data
    } catch (error) {
        console.warn("getPlaceDetails: ", error)
    }
}
