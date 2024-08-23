import { CardContent, Typography, Card } from "@mui/material"
import { PlaceDetails } from "../../PlaceDetails/types"
import classes from "./styles"
export const ChosenDetails = ({ place }: { place: PlaceDetails }) => {
    return (
        <Card sx={classes.card}>
            <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    {place?.name ? place?.name : " "}
                </Typography>

                <Typography>
                    <strong>Адрес:</strong> {place?.address?.house_number ? `${place?.address?.house_number} ` : " "}
                    {place?.address?.city ? `${place?.address?.city}  ` : " "}
                    {place?.address?.suburb ? `${place?.address?.suburb}  ` : " "}
                    {place?.address?.state ? `${place?.address?.state}  ` : " "}
                    {place?.address?.country ? `${place?.address?.country}` : " "}
                </Typography>
                <Typography>{place?.description ? `Описание:${place?.description} ` : " "}</Typography>
                <Typography>{place?.image ? `Ссылка на изображение: ${place?.image} ` : " "}</Typography>
                <Typography>{place?.rate ? `Рейтинг известности: ${parseInt(place?.rate)} ` : " "}</Typography>
                <Typography>{place?.point ? `Координаты: широта-${place?.point.lat.toFixed(4)}, долгота-${place?.point.lon.toFixed(4)} ` : " "}</Typography>
                <Typography>{place?.url ? `сайт-${place?.url}` : ""}</Typography>
                <Typography>{place?.voyage ? `WikiVoyage-${place?.voyage}` : ""}</Typography>
                <Typography>{place?.wikipedia ? `Wikipedia-${place?.wikipedia}` : ""}</Typography>
                <Typography>{place?.wikipedia_extracts?.text ? `Описание с Wikipedia-${place?.wikipedia_extracts?.text}` : ""}</Typography>
            </CardContent>
        </Card>
    )
}
