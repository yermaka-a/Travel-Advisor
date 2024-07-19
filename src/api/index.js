import axios from "axios"
import { RAPID_HOST, RAPID_KEY, RAPID_URL } from "../config"

const URL = RAPID_URL
const options = {
	method: "GET",

	params: {
		bl_latitude: "11.847676",
		tr_latitude: "12.838442",
		bl_longitude: "109.095461",
		tr_longitude: "109.149359",
	},
	headers: {
		"x-rapidapi-key": RAPID_KEY,
		"x-rapidapi-host": RAPID_HOST,
	},
}

export const getPlacesData = async () => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, options)
		return data
	} catch (error) {
		console.warn(error)
	}
}
