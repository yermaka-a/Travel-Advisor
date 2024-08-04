import { colors, createTheme } from "@mui/material"

const theme = createTheme()
theme.palette.primary.main = "#f50057"
export default {
  title: {
    display: "block",
  },

  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: colors.grey[400],
    justifyContent: "center",
    left: "0.5rem",
  },
  inputRoot: {
    color: "black",
    paddingLeft: "1rem",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1rem",
  },
  appbar: {
    display: "flex",
    marginBottom: "2rem",
    backgroundColor: theme.palette.primary.main,
  },
  search: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    right: "40rem",
  },
}
