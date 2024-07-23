import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"
import useStyles from "./styles"

const PlaceDetails = ({ places }) => {
	const classes = useStyles()
	return (
		<Card elevation={6}>
			<CardMedia style={{ height: 350 }} image={places.photo ? places.photo.images.large.url : ""}>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{place.name}
						<Box display="flex" justifyContent="space-between">
							<Typography variant="subtitle1"></Typography>
							<Typography variant="subtitle1">{place.price_level}</Typography>
						</Box>
						<Box display="flex" justifyContent="space-between">
							<Typography variant="subtitle1"></Typography>
							<Typography variant="subtitle1">{place.ranking}</Typography>
						</Box>
						{place?.awards?.map((award) => (
							<Box my={1} display="flex" justifyContent="space-between" alignItems="center">
								<img src={award.images.small} alt={award.display_name} />
								<Typography variant="subtitle2" color="textSecondary">
									{award.display_name}
								</Typography>
							</Box>
						))}
					</Typography>
				</CardContent>
			</CardMedia>
		</Card>
	)
}

export default PlaceDetails
