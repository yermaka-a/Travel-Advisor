import { Box, Icon, Link, Typography } from "@mui/material"

import bearIcon from "~/assets/bear.svg"
import vkIcon from "~/assets/vk-icon.svg"
import telegramIcon from "~/assets/telegram.svg"
import classes from "./styles"
export const Logo = () => {
    return (
        <Box sx={classes.logo}>
            <Typography variant="h5" sx={classes.title}>
                Travel Advisor
            </Typography>
            <Box sx={classes.linksContainer}>
                <Link sx={classes.linkStyle} target="_blank" href="https://vk.com/ermakad">
                    <Icon sx={classes.SVGIcon}>
                        <img style={classes.SVGIcon} src={vkIcon} alt="vk.com" />
                    </Icon>
                </Link>
                <Link sx={classes.linkStyle} target="_blank" href="https://gitflic.ru/project/yermaka/resume">
                    <Icon sx={classes.SVGIcon}>
                        <img style={classes.SVGIcon} src={bearIcon} alt="gitflic_resume" />
                    </Icon>
                </Link>
                <Link sx={classes.linkStyle} target="_blank" href="https://t.me/yermaka">
                    <Icon sx={{ ...classes.SVGIcon }}>
                        <img style={{ ...classes.SVGIcon, marginRight: "0rem" }} src={telegramIcon} alt="telegram link" />
                    </Icon>
                </Link>
            </Box>
        </Box>
    )
}
