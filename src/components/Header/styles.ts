import { createTheme } from "@mui/material"

const theme = createTheme()
theme.palette.primary.main = "#f50057"
export default {
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "0.5rem",
        maxWidth: "80em"
    },
    appbar: {
        padding: "0.3rem",
        display: "flex",
        marginBottom: "1rem",
        backgroundColor: theme.palette.primary.main
    }
}
