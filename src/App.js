import React, { useEffect, useState } from "react"
import { CssBaseline, Grid } from "@material-ui/core"
import data from "./api/test_data"
import { getPlacesData } from "./api"
import Header from "./components/Header/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"

import { Y_API_KEY } from "./config"
import { YMaps } from "@pbe/react-yandex-maps"
const App = () => {
	const [places, setPlaces] = useState([])
	const [coordinates, setCoordinates] = useState({})
	const [bounds, setBounds] = useState(null)
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({ lat: latitude, lng: longitude })
		})
	}, [])

	useEffect(() => {
		try {
			if (bounds !== null) {
				// getPlacesData(bounds.sw, bounds.ne).then((data) => {
				// 	setPlaces(data)
				//
				// })
				setPlaces(data)
				console.log(data)
			}
		} catch (error) {
			console.error("The second UseEffect error: ", error)
		}
	}, [coordinates, bounds])

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={9}>
					<YMaps query={{ apikey: Y_API_KEY }}>
						<Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
					</YMaps>
				</Grid>
			</Grid>
		</>
	)
}
export default App
