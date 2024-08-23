import { createTheme } from "@mui/material/styles"
const theme = createTheme()

export default {
    listTitle: {
        textAlign: "center",
        fontSize: "1.1rem",
        fontWeight: "bold",
        marginBottom: "2px",
        marginTop: "2px"
    },
    formControl: {
        margin: "1rem",
        minWidth: 120,
        marginBottom: "30px",
        display: "flex",

        width: "100%",

        alignItems: "center"
    },
    label: {
        position: "absolute",
        fontSize: theme.typography.pxToRem(20),
        fontWeight: "bold",
        left: theme.spacing(1),
        top: theme.spacing(-1.3)
    },
    select: {
        width: "80%"
    }
}
