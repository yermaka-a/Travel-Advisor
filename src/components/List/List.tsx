import classes from "./styles"
import { Grid, Typography, Divider, Icon } from "@mui/material"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import { PlaceDetails } from "../PlaceDetails"
import { usePlacesStore } from "../../states"
import { useShallow } from "zustand/react/shallow"
import { TPlaces } from "./types"
import { SyntheticEvent, useLayoutEffect, useRef, useState } from "react"
import { ListParameters } from "./ListParameters"

export const List = () => {
    const { places, rating } = usePlacesStore(
        useShallow((state) => ({
            places: state.places,
            rating: state.rating
        }))
    )
    const getCurrentPlaceValue = useRef(0)
    const [listPlaces, setListPlaces] = useState<TPlaces>([])
    const listRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        const listPlaces: TPlaces = []
        listRef.current && listRef.current.scrollTo(0, 0)
        for (let i = getCurrentPlaceValue.current; i < getCurrentPlaceValue.current + 10; i++) {
            if (i < places.length) {
                listPlaces.push(places[i])
            }
        }
        getCurrentPlaceValue.current += 10
        setListPlaces(listPlaces)
        return () => {
            getCurrentPlaceValue.current = 0
        }
    }, [places])

    function changePlaces(event: SyntheticEvent<HTMLDivElement, UIEvent>): void {
        const hiddenHeight = event.currentTarget.scrollTop
        const visibleHeight = event.currentTarget.clientHeight
        const height = event.currentTarget.scrollHeight
        if (getCurrentPlaceValue.current < places.length) {
            if (hiddenHeight + visibleHeight >= height - 200) {
                const listPlaces: TPlaces = []

                for (let i = getCurrentPlaceValue.current; i < getCurrentPlaceValue.current + 10; i++) {
                    if (i < places.length) {
                        listPlaces.push(places[i])
                    }
                }
                getCurrentPlaceValue.current += 10
                setListPlaces((prev) => prev.concat(listPlaces))
            }
        }
    }

    return (
        <div style={{ paddingRight: "1rem" }}>
            <Typography variant="h4" sx={classes.listTitle}>
                Рестораны, отели или культурные места в выбранном вами месте!
            </Typography>
            <ListParameters />
            <Grid sx={classes.container} spacing={3} onScroll={changePlaces} ref={listRef}>
                {listPlaces
                    .filter((place) => +place?.rate >= rating)
                    .map((place) => (
                        <Grid key={place.xid} item xs={12}>
                            <PlaceDetails place={place} />
                        </Grid>
                    ))}
                {listPlaces.filter((place) => +place?.rate >= rating).length > 0 ? (
                    <Typography sx={classes.thatsIt}>Все места, что удалось найти!</Typography>
                ) : (
                    <Typography sx={classes.thatsIt} style={{ color: "#808088" }}>
                        <Divider />
                        К сожалению таких мест нет!
                        <br /> Попробуйте изменить параметры поиска...
                        <Divider />
                        <Icon sx={{ width: "100px", height: "100px" }}>
                            <SentimentDissatisfiedIcon sx={classes.sadIcon} />
                        </Icon>
                    </Typography>
                )}
            </Grid>
        </div>
    )
}
