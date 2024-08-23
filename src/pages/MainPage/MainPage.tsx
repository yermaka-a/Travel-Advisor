import { CssBaseline, Grid } from "@mui/material"

import { Header } from "~/components/Header"
import { Map } from "~/components/Map"
import { List } from "~/components/List"
import { YMaps } from "@pbe/react-yandex-maps"
import ENV from "~/config"

export const MainPage = () => {
    return (
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
    )
}
