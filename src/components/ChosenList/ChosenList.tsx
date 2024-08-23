import { AppBar, Container, List } from "@mui/material"
import { createPortal } from "react-dom"

import { useChosenStore } from "~/states"
import classes from "./styles"
import { ChosenDetails } from "./ChosenDetails"
import { Logo } from "../ui/logo"
import { ChosenButton } from "../ui/ChosenButton"

const ChosenListId = document.getElementById("chosen-list")
export const ChosenList = ({ close = true }: { close?: boolean }) => {
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)

    const onSaveHandler = () => {
        console.log(chosenPlaces)
    }

    const onCloseHandler = () => {
        console.log("close")
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
                      {chosenPlaces.map((place) => (
                          <ChosenDetails key={place.xid} place={place} />
                      ))}
                  </List>
              </Container>,
              ChosenListId ?? document.body
          )
}
