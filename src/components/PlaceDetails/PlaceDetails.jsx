import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"
import useStyles from "./styles"

const PlaceDetails = ({ place }) => {
	const classes = useStyles()

	return (
		<Card elevation={6}>
			<CardMedia sx={{ height: 100 }}>
				<CardContent>
					<Typography gutterBottom variant="h5">
						<Box display="flex" justifyContent="align-items">
							<Typography variant="h5">{place.name}</Typography>
						</Box>
						<Box display="flex" justifyContent="space-between">
							<Typography variant="subtitle1">Рейтинг известности:</Typography>
							<Typography variant="subtitle1">{place.rate}</Typography>
						</Box>
					</Typography>
				</CardContent>
			</CardMedia>
		</Card>
	)
}

export default PlaceDetails
