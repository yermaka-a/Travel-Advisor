import React, { useState } from "react"
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"
import PlaceDetails from "../PlaceDetails/PlaceDetails"

import useStyles from "./styles"

const List = ({ places }) => {
  const classes = useStyles()
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.listTitle}>
        Рестораны, отели или культурные места в выбранном вами месте!
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Что ищем?</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Рестораны</MenuItem>
          <MenuItem value="hotels">Отели</MenuItem>
          <MenuItem value="attractions">Культурные места</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Рейтинг</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>Любой</MenuItem>
          <MenuItem value={3}>От 3.0</MenuItem>
          <MenuItem value={4}>От 4.0</MenuItem>
          <MenuItem value={5}>От 5.0</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
