import axios from "axios"

import { OTM_KEY, OTM_PLACES_URL, OTM_PLACE_URL } from "../config"

const URL = OTM_PLACES_URL
const PLACE_URL = OTM_PLACE_URL
export const asyncGetPlacesData = async (sw, ne, ...args) => {
  try {
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
        apikey: OTM_KEY,
      },
    }

    const { data } = await axios.get(URL, options)
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getPlaceDetails = async (id) => {
  try {
    const { data } = await axios.get(`${PLACE_URL}${id}`, {
      params: {
        apikey: OTM_KEY,
      },
    })
    return data
  } catch (error) {
    console.warn("getPlaceDetails: ", error)
  }
}
