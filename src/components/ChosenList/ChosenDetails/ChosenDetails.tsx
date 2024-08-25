import { CardContent, Typography, Card, Box, Link } from "@mui/material"
import { DeleteButton } from "~/components/ui/DeleteButton"
import { PlaceDetails } from "../../PlaceDetails/types"
import classes from "./styles"
import { useChosenStore } from "~/states"
export const ChosenDetails = ({ place }: { place: PlaceDetails }) => {
    const deleteChosen = useChosenStore((state) => state.deleteChosen)
    const onDeleteHandler = () => {
        deleteChosen(place)
    }
    return (
        <Card sx={classes.card}>
            <CardContent>
                <Box sx={classes.cardHeader}>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        {place?.name ? place?.name : " "}
                    </Typography>
                    <DeleteButton onClick={onDeleteHandler} />
                </Box>

                <Typography>
                    <strong>Адрес:</strong> {place?.address?.house_number ? `${place?.address?.house_number} ` : " "}
                    {place?.address?.city ? `${place?.address?.city}  ` : " "}
                    {place?.address?.suburb ? `${place?.address?.suburb}  ` : " "}
                    {place?.address?.state ? `${place?.address?.state}  ` : " "}
                    {place?.address?.country ? `${place?.address?.country}` : " "}
                </Typography>
                <Typography>{place?.description ? `Описание:${place?.description} ` : " "}</Typography>
                <Typography>
                    {place?.image ? (
                        <Typography>
                            <strong>Ссылка на изображение:</strong>{" "}
                            <Link href={place?.image} target="_blank">
                                {place?.image}
                            </Link>
                        </Typography>
                    ) : (
                        " "
                    )}
                </Typography>
                <Typography>{place?.rate ? `Рейтинг известности: ${parseInt(place?.rate)}` : " "}</Typography>
                <Typography>{place?.point ? `Координаты: широта-${place?.point.lat.toFixed(4)}, долгота-${place?.point.lon.toFixed(4)} ` : " "}</Typography>
                <Typography>
                    {place?.url ? (
                        <Typography>
                            <strong>Сайт:</strong>{" "}
                            <Link href={place?.url} target="_blank">
                                {place?.url}
                            </Link>
                        </Typography>
                    ) : (
                        ""
                    )}
                </Typography>
                <Typography>
                    {place?.voyage ? (
                        <Typography>
                            <strong>WikiVoyage:</strong>{" "}
                            <Link href={place?.voyage} target="_blank">
                                {place?.voyage}
                            </Link>
                        </Typography>
                    ) : (
                        ""
                    )}
                </Typography>
                <Typography>
                    {place?.wikipedia ? (
                        <Typography>
                            <strong>Wikipedia:</strong>{" "}
                            <Link href={place?.wikipedia} target="_blank">
                                {place?.wikipedia}
                            </Link>
                        </Typography>
                    ) : (
                        ""
                    )}
                </Typography>
                <Typography>{place?.wikipedia_extracts?.text ? `Описание с Wikipedia-${place?.wikipedia_extracts?.text}` : ""}</Typography>
            </CardContent>
        </Card>
    )
}
