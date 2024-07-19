import React from "react"
import { Map as YMap } from "@pbe/react-yandex-maps"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"

import Rating from "@material-ui/lab"
import { API_KEY } from "../../config"
import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const classes = useStyles()
	const isMobile = useMediaQuery("(min-width:600px)")

	return (
		<div className={classes.mapContainer}>
			<YMap
				style={{ width: "100%", height: "100%" }}
				defaultState={{ center: [55.75, 37.57], zoom: 14 }}
				state={{ center: [55.75, 37.57], zoom: 9 }}
				onChange={(e) => setCoordinates({ lat: e.center.lat, lng: e.center.lng })}
			/>
		</div>
	)
}

export default Map
