import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "5px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
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
}))
