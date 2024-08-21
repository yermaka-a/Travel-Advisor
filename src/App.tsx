import { CssBaseline, Grid } from "@mui/material"

import { Header } from "./components/Header"
import { Map } from "./components/Map"
import { List } from "./components/List"
import { YMaps } from "@pbe/react-yandex-maps"
import ENV from "./config"
import { useGetShow } from "./states"

import { SyntheticEvent } from "react"
import { ChosenList } from "./components/ChosenList/ChosenList"

const App = () => {
    const setShow = useGetShow((state) => state.setShow)
    const appClickHandler = (e: SyntheticEvent) => {
        if (!(e.target instanceof HTMLInputElement))
            if (!((e.target instanceof HTMLDivElement || e.target instanceof HTMLButtonElement || e.target instanceof HTMLLIElement) && e.target.hasAttribute("data-button"))) {
                setShow(false)
            }
    }
    return (
        <div onClick={appClickHandler}>
            <YMaps query={{ apikey: ENV.Y_API_KEY }}>
                <CssBaseline />
                <Header />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <List />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Map />
                    </Grid>
                </Grid>
            </YMaps>
            <ChosenList />
        </div>
    )
}
export default App
