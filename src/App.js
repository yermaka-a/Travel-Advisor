import { CssBaseline, Grid } from "@material-ui/core"

import Header from "./components/Header/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"

import { Y_API_KEY } from "./config"
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
          <YMaps query={{ apikey: Y_API_KEY }}>
            <Map />
          </YMaps>
        </Grid>
      </Grid>
    </>
  )
}
export default App
