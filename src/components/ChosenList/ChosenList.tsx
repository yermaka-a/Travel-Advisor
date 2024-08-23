import { AppBar, Container, Grid, List } from "@mui/material"
import { createPortal } from "react-dom"

import { useChosenStore } from "~/states"
import classes from "./styles"
import { ChosenDetails } from "./ChosenDetails"
import { Logo } from "../ui/logo"
import { ChosenButton } from "../ui/ChosenButton"

const ChosenListById = document.getElementById("chosen-list")
export const ChosenList = ({ close, onClose }: { close: boolean; onClose: (close: boolean) => void }) => {
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)

    const onSaveHandler = () => {
        console.log(chosenPlaces)
    }

    const onCloseHandler = () => {
        onClose(true)
    }

    return close
        ? ""
        : createPortal(
              <Container maxWidth={false} sx={classes.container}>
                  <List sx={classes.list}>
                      <AppBar sx={classes.appBar}>
                          <ChosenButton onClick={onSaveHandler}>Сохранить</ChosenButton>
                          <Logo />
                          <ChosenButton onClick={onCloseHandler}>Закрыть</ChosenButton>
                      </AppBar>
                      <Grid container sx={classes.grid}>
                          {chosenPlaces.map((place) => (
                              <ChosenDetails key={place.xid} place={place} />
                          ))}
                      </Grid>
                  </List>
              </Container>,
              ChosenListById ?? document.body
          )
}
