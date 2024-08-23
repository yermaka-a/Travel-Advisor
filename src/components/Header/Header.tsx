import classes from "./styles"

import { AppBar, Divider, Toolbar } from "@mui/material"

import { Logo } from "../ui/logo"
import { ChosenButton } from "../ui/ChosenButton"
import { SearchingPlaces } from "./SearchingPlaces"
import { useChosenStore } from "~/states"

export const Header = () => {
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)

    return (
        <AppBar sx={classes.appbar} position="static">
            <Toolbar sx={classes.toolbar}>
                <Logo />
                {chosenPlaces.length ? (
                    <ChosenButton sx={{ height: "100%" }}>
                        <Divider />
                        Сохранённые места
                        <Divider />
                    </ChosenButton>
                ) : (
                    ""
                )}
                <SearchingPlaces />
            </Toolbar>
        </AppBar>
    )
}
