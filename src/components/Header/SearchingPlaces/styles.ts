import { colors } from "@mui/material"

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
    search: {
        position: "relative",
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        display: "block"
    }
}
