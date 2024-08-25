import { AppBar, Box, Container, Divider, Grid, List } from "@mui/material"
import { createPortal } from "react-dom"
import { useChosenStore } from "~/states"
import classes from "./styles"
import { ChosenDetails } from "./ChosenDetails"
import { Logo } from "../ui/logo"
import { ChosenButton } from "../ui/ChosenButton"
import { transformDataToXLSX } from "./lib/libs"
import { useRef } from "react"

const ChosenListById = document.getElementById("chosen-list")
export const ChosenList = ({ close, onClose }: { close: boolean; onClose: (close: boolean) => void }) => {
    const chosenBtnRef = useRef<HTMLButtonElement | null>(null)
    const chosenPlaces = useChosenStore((state) => state.chosenPlaces)
    const clearStore = useChosenStore((state) => state.clearStore)
    const onSaveHandler = () => {
        transformDataToXLSX(chosenPlaces)
    }

    const onCloseHandler = (e?: React.SyntheticEvent) => {
        if (chosenBtnRef.current && !chosenBtnRef.current.hasAttribute("data-close")) chosenBtnRef.current?.setAttribute("data-close", "true")
        if (e?.target && e.target instanceof HTMLElement) {
            e.target.hasAttribute("data-close") && onClose(true)
        }
    }
    const onClearHandler = () => {
        clearStore()
    }

    return close
        ? ""
        : createPortal(
              <Container data-close onClick={onCloseHandler} maxWidth={false} sx={classes.container}>
                  <List sx={classes.list}>
                      <AppBar sx={classes.appBar}>
                          <Box sx={classes.BoxContainer}>
                              <ChosenButton onClick={onClearHandler}>Очистить</ChosenButton>
                              <Logo />
                              <ChosenButton ref={chosenBtnRef} onClick={onCloseHandler}>
                                  Закрыть
                              </ChosenButton>
                          </Box>
                          <ChosenButton onClick={onSaveHandler}>
                              <Divider />
                              Сохранить EXCEL
                          </ChosenButton>
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
