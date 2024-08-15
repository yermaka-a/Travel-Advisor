import classes from "./styles"

import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { HintList } from "./HintList"
import { useGetShow, useGetYMapsApiRef } from "~/states"

import { debounce } from "~/utils"
import { useState } from "react"

import nextId, { resetId } from "react-id-generator"
import { IExtDataManager, THints } from "./types"
import { IGetShow } from "~/states/types"
const Search = styled("div")({
    position: "relative",
    paddingLeft: "1rem",
    borderRadius: "0.6rem",
    backgroundColor: "white",
    marginRight: "2rem",
    marginLeft: 0,
    width: "100%",
    alignSelf: "right"
})

export const Header = () => {
    const yMapsApiRef = useGetYMapsApiRef((state) => state.yMapsApiRef)
    const [hints, setHints] = useState<THints[]>([])
    const { show, setShow } = useGetShow<IGetShow>((state) => ({
        show: state.show,
        setShow: state.setShow
    }))

    const [inputFill, setInputFill] = useState(false)
    const [foundPlaces, setFoundPlaces] = useState(0)
    const getPlaceCoords = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const placeName = e.target.value
        let res = undefined
        try {
            if (yMapsApiRef && placeName) {
                res = await yMapsApiRef.geocode(placeName)
            }
            if (!res) {
                setFoundPlaces(0)
                throw new Error("Geocoder object throw error during geocoding: ", res)
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
                        text: data.text
                    })
                })
                resetId()
                if (hints.length > 0) {
                    setFoundPlaces(1)
                } else {
                    setFoundPlaces(-1)
                }
                setHints(hints)
            }
        } catch (error) {
            console.error("Geocoder object throw error during geocoding: ", error)
        }
    }
    const getFillingInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value.length > 0) {
            setInputFill(true)
        } else {
            setInputFill(false)
            setHints([])
        }
    }

    const getDebounceFillingInput = debounce(getFillingInput, 1001)
    const getDebouncePlaceCoords = debounce(getPlaceCoords, 1000)
    const debounceSetShow = debounce(setShow, 350)
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
                                getDebounceFillingInput(e)
                                getDebouncePlaceCoords(e)
                                setShow(true)
                            }}
                            onFocus={(e) => {
                                setShow(true)
                                getFillingInput(e)
                            }}
                            sx={classes.inputRoot}
                            placeholder="Поиск..."
                        />
                    </Search>
                    <HintList hints={hints} show={show} inputFill={inputFill} foundPlaces={foundPlaces} debounceSetShow={debounceSetShow} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
