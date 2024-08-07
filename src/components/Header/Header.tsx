import classes from "./styles"

import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { IGeocodeResult } from "yandex-maps"
import { useGetYMapRef } from "~/states"
import { useRef } from "react"

import { debounce } from "~/utils"
const Search = styled("div")({
    position: "relative",
    paddingLeft: "1rem",
    borderRadius: "0.6rem",
    backgroundColor: "white",
    marginRight: "2rem",
    marginLeft: 0,
    width: "100%",
    alignSelf: "right",
})

export const Header = () => {
    const yMapRef = useGetYMapRef((state) => state.yMapRef)
    const getPlaceCoords = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const placeName = e.target.value
        let res: IGeocodeResult | undefined = undefined
        try {
            if (yMapRef && placeName) {
                res = await yMapRef.geocode(placeName)
            }
            if (!res) {
                new Error("Geocoder object throw error during geocoding: ", res)
            } else {
                // найти объекты для поиска и получить их названия и координаты
                console.log(
                    "geocoder object was success!: ",
                    res.geoObjects.each((el) => console.log("geocoder element: ", el.properties.get("name", {}))),
                    // создать объект для подсказок и получить их названия и координаты, далее отрисовать выбранный объект на карте с определёнными свойствами
                )
            }
        } catch (error) {
            console.error("Geocoder object throw error during geocoding: ", error)
        }
    }

    const getDebouncePlaceCoords = debounce(getPlaceCoords, 1000)

    return (
        <AppBar sx={classes.appbar} position="static">
            <Toolbar sx={classes.toolbar}>
                <Typography variant="h5" sx={classes.title}>
                    Travel Advisor
                </Typography>
                <Box sx={classes.search} display="flex">
                    <Typography variant="h6" sx={classes.title}>
                        Исследуйте новые места!
                    </Typography>
                    <Search>
                        <Box sx={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            onChange={(e) => {
                                getDebouncePlaceCoords(e)
                            }}
                            sx={classes.inputRoot}
                            placeholder="Поиск..."
                        />
                    </Search>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
