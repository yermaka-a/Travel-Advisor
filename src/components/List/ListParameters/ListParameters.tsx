import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import classes from "./styles"
import { usePlacesStore } from "~/states"
export const ListParameters = () => {
    const { type, setType, getPlacesData, setRating, rating } = usePlacesStore((state) => ({
        type: state.type,
        rating: state.rating,
        setRating: state.setRating,
        setType: state.setType,
        getPlacesData: state.getPlacesData
    }))

    return (
        <>
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
                    <MenuItem value={1}>От 1.0</MenuItem>
                    <MenuItem value={2}>От 2.0</MenuItem>
                    <MenuItem value={3}>От 3.0</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}
