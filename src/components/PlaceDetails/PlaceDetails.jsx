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
  Button,
  Divider,
  ListItemIcon,
  ImageListItem,
  Icon,
} from "@material-ui/core"

import Rating from "@material-ui/lab/Rating"
import cameraBlockUrl from "../../assets/camera-block.svg"

import useStyles from "./styles"
import { getPlaceDetails } from "../../api"

const PlaceDetails = ({ place }) => {
  const classes = useStyles()
  const [placeData, setPlaceData] = useState(null)
  const [isOpen, changeOpen] = useState(false)
  const [isUrl, setUrl] = useState(true)

  const openPlaceDetails = () => {
    if (!isOpen && placeData === null) {
      getPlaceDetails(place.xid).then((data) => {
        setPlaceData(data)
      })
    }
    changeOpen((prev) => !prev)
  }

  const showPlaceOnMap = () => {
    changeOpen((prev) => !prev)
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
                      {isUrl ? (
                        <ImageListItem
                          style={{
                            width: "100%",
                            height: 180,
                            border: "solid grey 1px",
                            borderRadius: "5px",
                          }}
                          key={placeData?.image}>
                          <img
                            src={placeData?.image}
                            onLoad={(e) => setUrl(true)}
                            onError={() => setUrl(false)}
                          />
                        </ImageListItem>
                      ) : (
                        <ListItemIcon>
                          <Icon
                            style={{
                              width: "100%",
                              height: "100%",
                            }}>
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              src={cameraBlockUrl}
                              alt="camera-block"
                            />
                          </Icon>
                        </ListItemIcon>
                      )}
                      <ListItem>
                        {placeData?.address?.house_number}{" "}
                        {placeData?.address?.suburb} {placeData?.address?.city}{" "}
                        {placeData?.address?.state}{" "}
                        {placeData?.address?.country}
                      </ListItem>
                      <ListItem>{placeData?.wikipedia_extracts?.text}</ListItem>
                      <Button
                        variant="contained"
                        className={classes.btn}
                        onClick={showPlaceOnMap}>
                        Показать на карте
                      </Button>
                      <ListItem></ListItem>
                    </List>
                  </Typography>
                </Zoom>
              </Box>
            ) : (
              <Zoom in={!isOpen}>
                <Typography
                  variant="subtitle1"
                  className={classes.additionalInfo}>
                  Показать больше...
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
