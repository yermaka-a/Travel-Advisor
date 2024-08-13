import classes from "./styles"
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, Divider, Icon } from "@mui/material"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import { PlaceDetails } from "../PlaceDetails"
import { usePlacesStore } from "../../states"

import { ListProps, TPlaces } from "./types"
import { SyntheticEvent, useLayoutEffect, useRef, useState } from "react"

export const List = () => {
    const { places, type, rating, setRating, setType, getPlacesData } = usePlacesStore<ListProps>((state) => ({
        places: state.places,
        type: state.type,
        rating: state.rating,
        setRating: state.setRating,
        setType: state.setType,
        getPlacesData: state.getPlacesData
    }))
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
            <FormControl sx={classes.formControl}>
                <InputLabel sx={classes.label}>Что ищем?</InputLabel>
                <Select
                    sx={classes.select}
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value)
                        getPlacesData()
                    }}>
                    <Typography sx={classes.listTitle}>Жильё</Typography>
                    <MenuItem value="other_hotels">Отели</MenuItem>
                    <MenuItem value="hostels">Хостелы</MenuItem>
                    <MenuItem value="motels">Мотели</MenuItem>
                    <MenuItem value="resorts">Курорты</MenuItem>
                    <Typography sx={classes.listTitle}>Еда</Typography>
                    <MenuItem value="restaurants">Рестораны</MenuItem>
                    <MenuItem value="bars">Бары</MenuItem>
                    <MenuItem value="cafes">Кафе</MenuItem>
                    <MenuItem value="fast_food">ФастФуд</MenuItem>
                    <MenuItem value="food_courts">ФудКорты</MenuItem>
                    <Typography sx={classes.listTitle}>Культурные места</Typography>
                    <MenuItem value="museums">Музеи</MenuItem>
                    <MenuItem value="cultural">Культурные</MenuItem>
                    <MenuItem value="historic">Исторические</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={classes.formControl}>
                <InputLabel sx={classes.label}>Рейтинг</InputLabel>
                <Select
                    sx={classes.select}
                    value={rating}
                    onChange={(e) => {
                        setRating(+e.target.value)
                    }}>
                    <MenuItem value={0}>Любой</MenuItem>
                    <MenuItem value={3}>От 3.0</MenuItem>
                    <MenuItem value={4}>От 4.0</MenuItem>
                    <MenuItem value={5}>От 5.0</MenuItem>
                </Select>
            </FormControl>
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
