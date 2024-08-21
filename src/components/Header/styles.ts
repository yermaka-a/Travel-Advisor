import { colors, createTheme } from "@mui/material"

const theme = createTheme()
theme.palette.primary.main = "#f50057"
export default {
    searchIcon: {
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        color: colors.grey[400],
        justifyContent: "center",
        left: "0.5rem"
    },
    inputRoot: {
        color: "black",
        paddingLeft: "1rem"
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "0.5rem"
    },
    appbar: {
        padding: "0.3rem",
        display: "flex",
        marginBottom: "1rem",
        backgroundColor: theme.palette.primary.main
    },
    search: {
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        right: "40rem"
    },
    title: {
        display: "block"
    }
}
