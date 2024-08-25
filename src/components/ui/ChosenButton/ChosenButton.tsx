import { Typography } from "@mui/material"
import classes from "./styles"
import { IChosenButtonProps } from "./types"

import { forwardRef } from "react"
export const ChosenButton = forwardRef<HTMLElement, IChosenButtonProps>(({ children, sx, styles, onClick }, ref) => {
    return (
        <Typography ref={ref} onClick={onClick} sx={classes.chosen && { ...classes.chosen, ...sx }} style={styles}>
            {children}
        </Typography>
    )
})
