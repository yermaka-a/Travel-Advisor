import React, { useState } from "react"
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Zoom,
  ListItem,
  List,
  Divider,
  ImageListItem,
} from "@material-ui/core"
import Icon from "@material-ui/core/Icon"
import Rating from "@material-ui/lab/Rating"

import useStyles from "./styles"
import { getPlaceDetails } from "../../api"
import { testDataObj } from "../../api/test_data"
const PlaceDetails = ({ place }) => {
  const classes = useStyles()
  const [placeData, setPlaceData] = useState({})
  const [isOpen, changeOpen] = useState(false)
  const openPlaceDetails = () => {
    getPlaceDetails(place.xid).then((data) => {
      // setPlaceData(data)
      // console.log(data)
      console.log(testDataObj)
      setPlaceData(testDataObj)
      changeOpen((prev) => !prev)
    })
  }

  return (
    <Card elevation={6} className={classes.card} onClick={openPlaceDetails}>
      <CardMedia sx={{ height: 100 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            <Box display="flex" justifyContent="align-items">
              <Typography variant="h5">{place.name}</Typography>
            </Box>

            {isOpen ? (
              <Box sx={{ display: "flex" }}>
                <Divider variant="root" />
                <Zoom in={isOpen}>
                  <Typography>
                    <List>
                      <ImageListItem
                        style={{
                          width: "100%",
                          height: 180,
                          border: "solid grey 1px",
                          borderRadius: "5px",
                        }}
                        key={placeData.image}>
                        <img src={placeData.image} alt="place" />
                      </ImageListItem>
                      <ListItem> {placeData.address.suburb}</ListItem>
                      <ListItem> {placeData.address.city}</ListItem>
                      <ListItem> {placeData.address.state}</ListItem>
                      <ListItem> {placeData.address.country}</ListItem>
                    </List>
                  </Typography>
                </Zoom>
              </Box>
            ) : (
              <Zoom in={!isOpen}>
                <Typography
                  variant="subtitle1"
                  className={classes.additionalInfo}>
                  Показать больше инфо...
                </Typography>
              </Zoom>
            )}
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Рейтинг известности:</Typography>
              <Rating value={Number(place.rate)}></Rating>
            </Box>
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  )
}

export default PlaceDetails
