import { createTheme } from "@mui/material/styles"
const theme = createTheme()
const styles = {
  formControl: {
    margin: "1rem",
    minWidth: 120,
    marginBottom: "30px",
    display: "flex",

    width: "100%",

    alignItems: "center",
  },

  selectEmpty: {
    marginTop: "2rem",
  },

  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    padding: "1rem",

    width: "107%",
    boxShadow: "0 0 10px rgba(1, 1, 1, 0.4)",
    height: "600px",
    overflow: "auto",
  },

  listTitle: {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "2px",
    marginTop: "2px",
  },

  select: {
    width: "80%",
  },
  label: {
    position: "absolute",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: "bold",
    left: theme.spacing(1),
    top: theme.spacing(-1.3),
  },
  thatsIt:{
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "2px",
    marginTop: "2px",
    color: "#0bdb50"
  },
  sadIcon: {
    color: "#DCDCDC,",
    minHeight: "50%",
    minWidth: "100%"
  }
}

export default styles
