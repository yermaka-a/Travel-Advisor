import classes from "./styles"

import { Box, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { IHintListProps } from "./types"
import { THints } from "../types"

export const HintList = ({ hints, show, inputFill, foundPlaces, debounceSetShow }: IHintListProps) => {
    const getHintDetails = (hint: THints) => {
        // с помощью хинтов добавить метки на карту и кнопку подробнее, а также получить все данные с openStreetMap
        debounceSetShow(false)
    }

    if (foundPlaces === 1 && show && inputFill) {
        return (
            <List sx={classes.list}>
                {hints.map((hint, i) => (
                    <ListItemButton data-button onClick={() => getHintDetails(hint)} key={hint.id} sx={classes.listItem}>
                        <ListItem data-button sx={classes.listItem}>
                            {hint.name}
                        </ListItem>
                        {i !== hints.length - 1 && <Divider variant="middle" />}
                    </ListItemButton>
                ))}
            </List>
        )
    } else if (show && inputFill && foundPlaces === -1) {
        return (
            <Box sx={classes.list}>
                <Typography sx={classes.notFound}>Ничего не найдено</Typography>
            </Box>
        )
    }
}
