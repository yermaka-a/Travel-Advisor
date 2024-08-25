import { Button, Typography } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import classes from "./styles"
import { IDeleteButtonProps } from "./types"
export const DeleteButton = ({ onClick, sx, style }: Readonly<IDeleteButtonProps>) => {
    return (
        <Button sx={sx ? { ...sx, ...classes.button } : classes.button} style={style} onClick={onClick}>
            <Typography>Удалить</Typography>
            <ClearIcon sx={classes.clearIcon} />
        </Button>
    )
}
