import classes from "./styles"
import { styled } from "@mui/material/styles"

import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
const Search = styled("div")({
  position: "relative",
  paddingLeft: "1rem",
  borderRadius: "1rem",
  backgroundColor: "white",
  marginRight: "2rem",
  marginLeft: 0,
  width: "100%",
  alignSelf: "right",
})

const Header = () => {
  return (
    <AppBar sx={classes.appbar} color="secondary" position="static">
      <Toolbar sx={classes.toolbar}>
        <Typography variant="h5" sx={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" sx={classes.title}>
            Explore new places
          </Typography>
          <Search>
            <Box sx={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Поиск..."
              classes={{
                root: classes.inputRoot.color,
              }}
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
