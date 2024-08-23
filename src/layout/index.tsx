import { Container } from "@mui/material"
import { useGetShow } from "~/states"
import { SyntheticEvent } from "react"
import classes from "./styles"
export default function BaseLayout({ children }: { readonly children: React.ReactNode }) {
    const setShow = useGetShow((state) => state.setShow)
    const appClickHandler = (e: SyntheticEvent) => {
        if (!(e.target instanceof HTMLInputElement))
            if (!((e.target instanceof HTMLDivElement || e.target instanceof HTMLButtonElement || e.target instanceof HTMLLIElement) && e.target.hasAttribute("data-button"))) {
                setShow(false)
            }
    }

    return (
        <Container sx={classes.BaseLayout} maxWidth={false} onClick={appClickHandler}>
            {children}
        </Container>
    )
}
