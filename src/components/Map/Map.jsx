import React, { useRef } from "react"
import { Map as YMap } from "@pbe/react-yandex-maps"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import { useYMaps } from "@pbe/react-yandex-maps"
import Rating from "@material-ui/lab"

import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const classes = useStyles()

	const isMobile = useMediaQuery("(min-width:600px)")
	const { lat, lng } = coordinates
	const yMapRef = useRef(null)

	const getCoords = (e) => {
		const [lat, lng] = e.get("coords")
		setCoordinates({ lat, lng })
		const [ne /*north-east северо-восток правый верхний*/, sw /*south-west юго-восток левый нижний*/] = e.get("target").getBounds()
		setBounds({ ne, sw })
	}

	const mapHandler = () => {
		const [ne /*north-east северо-восток правый верхний*/, sw /*south-west юго-восток левый нижний*/] = yMapRef.current.getBounds()
		setBounds({ ne, sw })
	}

	return (
		<div className={classes.mapContainer}>
			<YMap
				instanceRef={yMapRef}
				style={{ width: "100%", height: "100%" }}
				defaultState={{ center: [lat, lng], zoom: 14 }}
				state={{ center: [lat, lng], zoom: 14 }}
				onClick={(e) => {
					getCoords(e)
				}}
				onLoad={() => mapHandler()}
			/>
		</div>
	)
}

export default Map
