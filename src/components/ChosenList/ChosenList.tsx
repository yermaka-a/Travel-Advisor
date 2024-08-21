import { AppBar, Container, List } from "@mui/material"
import { createPortal } from "react-dom"

import { useChosenStore } from "~/states"
import classes from "./styles"
import { ChosenDetails } from "./ChosenDetails"
import { Logo } from "../ui/logo"

const ChosenListId = document.getElementById("chosen-list")
export const ChosenList = () => {
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)
    return createPortal(
        <Container maxWidth={false} sx={classes.container}>
            <List sx={classes.list}>
                <AppBar sx={classes.appBar}>
                    <Logo />
                </AppBar>
                {chosenPlaces.map((place) => (
                    <ChosenDetails key={place.xid} place={place} />
                ))}
            </List>
        </Container>,
        ChosenListId ?? document.body
    )
}
