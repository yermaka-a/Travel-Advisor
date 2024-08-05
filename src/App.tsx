import { CssBaseline, Grid } from "@mui/material"

import {Header} from "./components/Header"
import {Map} from "./components/Map"
import {List} from "./components/List"

import ENV from "./config"
import { YMaps } from "@pbe/react-yandex-maps"

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <List />
        </Grid>
        <Grid item xs={12} md={9}>
          <YMaps query={{ apikey: ENV.Y_API_KEY }}>
            <Map />
          </YMaps>
        </Grid>
      </Grid>
    </>
  )
}
export default App
