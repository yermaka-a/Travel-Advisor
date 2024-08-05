import classes from "./styles"

import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material"
import {PlaceDetails} from "../PlaceDetails"
import { usePlacesStore } from "../../states"

import { ListProps } from "./types"
export const List = () => {
  const { places, type, rating, setRating, setType, getPlacesData } =
    usePlacesStore<ListProps>((state) => ({
      places: state.places,
      type: state.type,
      rating: state.rating,
      setRating: state.setRating,
      setType: state.setType,
      getPlacesData: state.getPlacesData,
    }))

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
      <Grid sx={classes.container} spacing={3}>
        {places
          .filter((place) => +place?.rate >= rating)
          .map((place) => (
            <Grid key={place.xid} item xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
