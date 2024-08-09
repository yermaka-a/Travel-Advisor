import { THints } from "../types"
import classes from "./styles"
import { memo } from "react"
import { Box, Divider, List, ListItem } from "@mui/material"

export const HintList = memo(({ hints, show }: { hints: THints[]; show: boolean }) => {
    return (
        <>
            {hints.length > 0 && show && (
                <List sx={classes.list}>
                    {hints.length > 0 &&
                        hints.map((hint, i) => (
                            <Box key={hint.id} sx={classes.listItem}>
                                <ListItem>{hint.name}</ListItem>
                                {i !== hints.length - 1 && <Divider variant="middle" />}
                            </Box>
                        ))}
                </List>
            )}
        </>
    )
})
