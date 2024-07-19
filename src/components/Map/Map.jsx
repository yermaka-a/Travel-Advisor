import React, { useRef } from "react"
import { Map as YMap } from "@pbe/react-yandex-maps"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"

import Rating from "@material-ui/lab"
import { API_KEY } from "../../config"
import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const classes = useStyles()
	const isMobile = useMediaQuery("(min-width:600px)")
	const { lat, lng } = coordinates
	const getCoords = (e) => {
		const [lat, lng] = e.get("coords")
		setCoordinates({ lat, lng })
		console.log(lat, lng)
	}

	return (
		<div className={classes.mapContainer}>
			<YMap
				style={{ width: "100%", height: "100%" }}
				defaultState={{ center: [lat, lng], zoom: 14 }}
				onClick={(e) => getCoords(e)}
				state={{ center: [lat, lng], zoom: 9 }}
			/>
		</div>
	)
}

export default Map
