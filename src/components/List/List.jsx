import React, { useState } from "react"
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import { usePlacesStore } from "../../states/index"
import useStyles from "./styles"

const List = () => {
  const { places, type, rating, setRating, setType, getPlacesData } =
    usePlacesStore((state) => ({
      places: state.places,
      type: state.type,
      rating: state.rating,
      setRating: state.setRating,
      setType: state.setType,
      getPlacesData: state.getPlacesData,
    }))
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.listTitle}>
        Рестораны, отели или культурные места в выбранном вами месте!
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Что ищем?</InputLabel>
        <Select
          className={classes.select}
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            getPlacesData()
          }}>
          <Typography className={classes.listTitle}>Жильё</Typography>
          <MenuItem value="other_hotels">Отели</MenuItem>
          <MenuItem value="hostels">Хостелы</MenuItem>
          <MenuItem value="motels">Мотели</MenuItem>
          <MenuItem value="resorts">Курорты</MenuItem>
          <Typography className={classes.listTitle}>Еда</Typography>
          <MenuItem value="restaurants">Рестораны</MenuItem>
          <MenuItem value="bars">Бары</MenuItem>
          <MenuItem value="cafes">Кафе</MenuItem>
          <MenuItem value="fast_food">ФастФуд</MenuItem>
          <MenuItem value="food_courts">ФудКорты</MenuItem>
          <Typography className={classes.listTitle}>
            Культурные места
          </Typography>
          <MenuItem value="museums">Музеи</MenuItem>
          <MenuItem value="cultural">Культурные</MenuItem>
          <MenuItem value="historic">Исторические</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Рейтинг</InputLabel>
        <Select
          className={classes.select}
          value={rating}
          onChange={(e) => {
            setRating(e.target.value)
          }}>
          <MenuItem value={0}>Любой</MenuItem>
          <MenuItem value={3}>От 3.0</MenuItem>
          <MenuItem value={4}>От 4.0</MenuItem>
          <MenuItem value={5}>От 5.0</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places
          .filter((place) => place.rate >= rating)
          .map((place) => (
            <Grid item xs={12}>
              <PlaceDetails key={place.idx} place={place} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default List
