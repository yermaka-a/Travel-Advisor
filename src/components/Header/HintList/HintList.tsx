import classes from "./styles"

import { Box, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { IHintListProps } from "./types"
import { THints } from "../SearchingPlaces/types"
import { useGetYMapRef, useGetYMapsApiRef } from "~/states"

import greenStar from "~/assets/green-star.svg"

export const HintList = ({ hints, show, inputFill, foundPlaces, debounceSetShow }: IHintListProps) => {
    const yMapsApiRef = useGetYMapsApiRef((state) => state.yMapsApiRef)
    const yMapRef = useGetYMapRef((state) => state.yMapRef)
    const getHintDetails = async (hint: THints) => {
        if (yMapsApiRef && yMapRef) {
            yMapRef.geoObjects.removeAll()
            yMapRef.setZoom(8)

            const placemark = new yMapsApiRef.Placemark(
                [hint.coordinates[0][0], hint.coordinates[0][1]],
                {
                    balloonContentHeader: hint.name,
                    balloonContentBody: hint.description,
                    balloonContentFooter: hint.text
                },
                {
                    iconLayout: "default#image",

                    iconImageHref: `${greenStar}`,
                    iconImageSize: [35, 63],
                    iconImageOffset: [-35, -63]
                }
            )

            yMapRef.panTo([hint.coordinates[0][0], hint.coordinates[0][1]])

            yMapRef.geoObjects.add(placemark)
        }
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
