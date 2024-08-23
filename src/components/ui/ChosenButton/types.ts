import { SxProps, Theme } from "@mui/material"

export interface IChosenButtonProps {
    children?: string | React.ReactNode
    styles?: React.CSSProperties
    sx?: SxProps<Theme>
    onClick?: () => void
 
}
