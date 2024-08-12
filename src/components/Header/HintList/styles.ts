const classes = {
    list: {
        position: "absolute",
        top: "4rem",
        "z-index": 10,
        backgroundColor: "rgba(229,228,226, 0.7)",
        borderRadius: "0.6rem",
        width: "100%",
    },
    listItem: {
        fontSize: "1rem",
        color: "black",

        "&:hover": {
            cursor: "pointer",
            color: "red",
        },
    },
    notFound: {
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: "1rem",
        color: "black",
    },
}

export default classes
