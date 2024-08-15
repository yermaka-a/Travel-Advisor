import type { Place, PlaceDetails as IPlaceDetails } from "./types"
import classes from "./styles"
import { useState } from "react"
import { Box, Typography, Card, CardMedia, CardContent, Zoom, ListItem, List, Button, Divider, ListItemIcon, ImageListItem, Icon } from "@mui/material"
import { usePlacesStore } from "~/states"
import Rating from "@mui/material/Rating"
import cameraBlockUrl from "../../assets/camera-block.svg"

import { getPlaceDetails } from "../../api"

export const PlaceDetails = ({ place }: { place: Place }) => {
    const [placeData, setPlaceData] = useState<IPlaceDetails | null>(null)
    const [isOpen, changeOpen] = useState<boolean>(false)
    const [isUrl, setUrl] = useState<boolean>(true)

    const addDetailsToPlace = usePlacesStore((state) => state.addDetailsToPlace)

    const seeDetailsOnMap = (placeData: IPlaceDetails) => {
        if (placeData) addDetailsToPlace(placeData)
    }
    const openPlaceDetails = async () => {
        if (!isOpen && placeData === null) {
            getPlaceDetails(place.xid).then((data) => {
                if (data) {
                    setPlaceData(data)
                    seeDetailsOnMap(data)
                }
            })
        }
        changeOpen((prev) => !prev)
    }

    const showPlaceOnMap = () => {
        changeOpen((prev) => !prev)
    }

    const cardOnClickHandler = async () => {
        openPlaceDetails()
        if (placeData && !isOpen) seeDetailsOnMap(placeData)
    }

    return (
        <Card elevation={6} sx={classes.card} onClick={cardOnClickHandler}>
            <CardMedia sx={classes.cardMedia}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <Box display="flex" justifyContent="align-items">
                            <Typography variant="h5">{place.name}</Typography>
                        </Box>
                        {isOpen ? (
                            <Box sx={{ display: "flex" }}>
                                <Divider variant="fullWidth" />
                                <Zoom in={isOpen}>
                                    <Typography>
                                        <List>
                                            {isUrl ? (
                                                <ImageListItem
                                                    style={{
                                                        width: "100%",
                                                        height: 180,
                                                        border: "solid grey 1px",
                                                        borderRadius: "5px"
                                                    }}
                                                    key={placeData?.image}>
                                                    <img src={placeData?.image} onLoad={() => setUrl(true)} onError={() => setUrl(false)} />
                                                </ImageListItem>
                                            ) : (
                                                <ListItemIcon>
                                                    <Icon
                                                        style={{
                                                            width: "100%",
                                                            height: "100%"
                                                        }}>
                                                        <img
                                                            style={{
                                                                width: "100%",
                                                                height: "100%"
                                                            }}
                                                            src={cameraBlockUrl}
                                                            alt="camera-block"
                                                        />
                                                    </Icon>
                                                </ListItemIcon>
                                            )}
                                            <ListItem>
                                                {placeData?.address?.house_number && `${placeData?.address?.house_number}, `}
                                                {placeData?.address?.suburb && `${placeData?.address?.suburb}, `}
                                                {placeData?.address?.city && `${placeData?.address?.city}, `}
                                                {placeData?.address?.state && `${placeData?.address?.state}, `}
                                                {placeData?.address?.country && `${placeData?.address?.country}`}
                                            </ListItem>
                                            <ListItem>{placeData?.wikipedia_extracts?.text}</ListItem>
                                            <Button color="inherit" variant="contained" sx={classes.btn} onClick={showPlaceOnMap}>
                                                Показать на карте
                                            </Button>
                                        </List>
                                    </Typography>
                                </Zoom>
                            </Box>
                        ) : (
                            <Zoom in={!isOpen}>
                                <Typography variant="subtitle1" sx={classes.additionalInfo}>
                                    Показать больше...
                                </Typography>
                            </Zoom>
                        )}
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body2">Рейтинг известности:</Typography>
                            <Rating readOnly size="small" value={Number(place.rate)}></Rating>
                        </Box>
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    )
}
