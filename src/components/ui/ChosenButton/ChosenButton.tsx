import { Typography } from "@mui/material"
import classes from "./styles"
import { IChosenButtonProps } from "./types"

export const ChosenButton = ({ children, sx, styles, onClick }: IChosenButtonProps) => {
    return (
        <Typography onClick={onClick} sx={classes.chosen && { ...classes.chosen, ...sx }} style={styles}>
            {children}
        </Typography>
    )
}
