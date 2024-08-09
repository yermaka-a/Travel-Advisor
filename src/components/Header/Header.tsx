import classes from "./styles"

import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { HintList } from "./HintList"
import { useGetYMapRef } from "~/states"

import { debounce } from "~/utils"
import { useState } from "react"

import nextId, { resetId } from "react-id-generator"
import { IExtDataManager, THints } from "./types"
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
    const [hints, setHints] = useState<THints[]>([])
    const [show, setShow] = useState(false)
    const getPlaceCoords = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const placeName = e.target.value
        let res = undefined
        try {
            if (yMapRef && placeName) {
                res = await yMapRef.geocode(placeName)
            }
            if (!res) {
                new Error("Geocoder object throw error during geocoding: ", res)
            } else {
                // найти объекты для поиска и получить их названия и координаты

                const hints: THints[] = []
                res.geoObjects.each((el) => {
                    const data = (el.properties as IExtDataManager).getAll()

                    hints.push({
                        name: data.name,
                        id: nextId("hintId-"),
                        coordinates: data.boundedBy,
                        description: data.description,
                        text: data.text,
                    })
                })
                resetId()
                setHints(hints)
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
                            onFocus={() => setShow(true)}
                            onBlur={() => setShow(false)}
                            sx={classes.inputRoot}
                            placeholder="Поиск..."
                        />
                    </Search>
                    <HintList hints={hints} show={show} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
