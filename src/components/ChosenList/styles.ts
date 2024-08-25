import { createTheme } from "@mui/material"

const theme = createTheme()
theme.palette.primary.main = "#f50057"
export default {
    list: {
        position: "relative",
        backgroundColor: " #E5E4E2",
        width: "80%",
        padding: "0rem 1rem 1rem 1rem",
        overflow: "scroll",
        overflowX: "hidden"
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
        position: "sticky",
        padding: "0.3rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "1rem",
        backgroundColor: theme.palette.primary.main
    },
    BoxContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
    },
    grid: {
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        width: "100%"
    }
}
