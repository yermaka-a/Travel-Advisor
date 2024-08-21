import classes from "./styles"
import { styled } from "@mui/material/styles"
import { useEffect, useState, useRef } from "react"
import { Placemark, RulerControl, TypeSelector, Map as YMap } from "@pbe/react-yandex-maps"
import { useGetYMapRef, useGetYMapsApiRef, usePlacesStore } from "~/states"
import { Bounds, ITypeSelectorOptions } from "./types"
import { MapEvent } from "yandex-maps"
import starIcon from "~/assets/star.svg"
import goldStar from "~/assets/gold-star.svg"
import { Place, PlaceDetails } from "../PlaceDetails/types"
import { getPlaceDetails } from "~/api"

const MapContainer = styled("div")({
    width: "100%",
    height: "100%"
})

export const Map = () => {
    const OpenCardXid = usePlacesStore((state) => state.OpenCardXid)
    const places = usePlacesStore((state) => state.places)
    const rating = usePlacesStore((state) => state.rating)
    const setYMapRef = useGetYMapRef((state) => state.setYMapRef)
    const getPlacesData = usePlacesStore((state) => state.getPlacesData)
    const setYMapsApiRef = useGetYMapsApiRef((state) => state.setYMapsApiRef)

    const yMapRef = useRef<ymaps.Map | null>(null)
    const [coordinates, setCoordinates] = useState<{
        lat: number
        lng: number
    }>({
        lat: 0,
        lng: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])
    const [bounds, setBounds] = useState<Bounds | null>(null)

    useEffect(() => {
        try {
            if (bounds !== null) {
                getPlacesData(bounds.sw, bounds.ne)
            }
        } catch (error) {
            console.error("The second UseEffect error: ", error)
        }
    }, [bounds])

    const mapHandler = (e: MapEvent) => {
        const [ne /*north-east северо-восток правый верхний*/, sw /*south-west юго-восток левый нижний*/] = e.get("target").getBounds()

        setBounds({ ne, sw })
        const coords = e.get("coords")

        setCoordinates({ lat: coords[0], lng: coords[1] })
    }

    const getStartedBounds = () => {
        if (yMapRef.current) {
            const [ne /*north-east северо-восток правый верхний*/, sw /*south-west юго-восток левый нижний*/] = yMapRef.current.getBounds()

            setBounds({ ne, sw })
        }
    }

    const handleShowInformationFromCardOnMap = (place: Place | PlaceDetails) => {
        console.log(place)
        getPlaceDetails(place.xid).then((placeData) => {
            if (placeData) {
                const balloonContent = `
                                            <div>
                                                ${placeData?.address?.house_number ? placeData?.address?.house_number : " "}
                                                ${placeData?.address?.suburb ? placeData?.address?.suburb : " "}
                                                ${placeData?.address?.city ? placeData?.address?.city : " "}
                                                ${placeData?.address?.state ? placeData?.address?.state : " "}
                                                ${placeData?.address?.country ? placeData?.address?.country : " "}
                                            </div>

                                            <img  src="${place.xid === OpenCardXid ? goldStar : starIcon}" />
                                            <br/>
                                            <div>
                                            ${placeData?.wikipedia_extracts?.text ? placeData?.wikipedia_extracts?.text : " "}
                                            </div>
`

                yMapRef.current?.balloon.open([placeData.point.lat, placeData.point.lon, placeData.point.lon], {
                    contentHeader: placeData.name,
                    contentBody: balloonContent
                })
            }
        })
    }

    return (
        <MapContainer sx={classes.mapContainer}>
            <YMap
                instanceRef={(yMap) => {
                    yMapRef.current = yMap
                    setYMapRef(yMap)
                }}
                style={{ width: "100%", height: "100%" }}
                defaultState={{ center: [coordinates.lat, coordinates.lng], zoom: 12 }}
                onClick={(e: MapEvent) => mapHandler(e)}
                modules={["geocode", "Placemark", "geoObject.addon.balloon", "geoObject.addon.hint"]}
                onLoad={(api) => {
                    setYMapsApiRef(api)
                    getStartedBounds()
                }}>
                <RulerControl defaultOptions={{ position: { right: 10, top: 10 }, visible: true }} />
                <TypeSelector defaultType={"yandex#map"} options={{ float: "left" } as ITypeSelectorOptions} />
                {places
                    .filter((place) => +place?.rate >= rating)
                    .map((place) =>
                        place.xid === OpenCardXid ? (
                            <Placemark
                                onLCick={() => console.log(OpenCardXid)}
                                key={place.xid}
                                geometry={[place.point.lat, place.point.lon]}
                                properties={{ hintContent: place.name }}
                                options={{
                                    iconLayout: "default#image",
                                    iconImageHref: `${goldStar}`,
                                    zIndex: 1000,
                                    zIndexActive: 1000,
                                    iconImageSize: [40, 40],
                                    iconImageOffset: [-35, -63]
                                }}
                                onClick={() => handleShowInformationFromCardOnMap(place)}
                            />
                        ) : (
                            <Placemark
                                key={place.xid}
                                geometry={[place.point.lat, place.point.lon]}
                                properties={{ hintContent: place.name }}
                                options={{
                                    iconLayout: "default#image",
                                    iconImageHref: `${starIcon}`,
                                    iconImageSize: [25, 25],
                                    iconImageOffset: [-35, -63]
                                }}
                                onClick={() => handleShowInformationFromCardOnMap(place)}
                            />
                        )
                    )}
            </YMap>
        </MapContainer>
    )
}
