import { createTheme } from "@mui/material"

const theme = createTheme()
theme.palette.primary.main = "#f50057"
export default {
    list: {
        position: "relative",
        backgroundColor: "#ffffff",
        width: "80%",
        padding: "0rem 1rem 1rem 1rem"
    },
    container: {
        top: 0,
        "z-index": 10,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba( 0, 0, 0, 0.7 )",
        width: "100%",
        height: "100%"
    },
    appBar: {
        position: "relative",
        padding: "0.3rem",
        display: "flex",
        marginBottom: "1rem",
        backgroundColor: theme.palette.primary.main
    }
}
