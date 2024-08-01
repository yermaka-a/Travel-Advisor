import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    cursor: "pointer",
    "&:hover": {
      background: "#E5E4E2",
    },
  },
  additionalInfo: {
    color: "#D53032",
    "&:hover": {
      color: "#EE204D",
    },
  },
  btn: {
    color: "#f50057",
  },
}))
