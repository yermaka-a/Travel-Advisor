import classes from "./styles"

import { AppBar, Badge, Divider, Toolbar } from "@mui/material"

import { Logo } from "../ui/logo"
import { ChosenButton } from "../ui/ChosenButton"
import { SearchingPlaces } from "./SearchingPlaces"
import { useChosenStore } from "~/states"
import { useState } from "react"
import { ChosenList } from "../ChosenList"

export const Header = () => {
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)
    const [close, setClose] = useState(true)
    const chosenOpenHandler = () => {
        setClose((prev) => !prev)
    }

    return (
        <AppBar sx={classes.appbar} position="static">
            <Toolbar sx={classes.toolbar}>
                <Logo />
                {chosenPlaces.length ? (
                    <ChosenButton sx={{ height: "100%" }} onClick={chosenOpenHandler}>
                        <Divider />
                        <Badge color="error" badgeContent={chosenPlaces.length}>
                            Сохранённые места
                        </Badge>
                        <Divider />
                    </ChosenButton>
                ) : (
                    ""
                )}
                <ChosenList close={close} onClose={setClose} />
                <SearchingPlaces />
            </Toolbar>
        </AppBar>
    )
}
