import classes from "./styles"
import { styled } from "@mui/material/styles"
import { useEffect, useRef, useState } from "react"
import { Map as YMap } from "@pbe/react-yandex-maps"

import { Bounds } from "./types"
import { MapEvent } from "yandex-maps"
import { usePlacesStore } from "../../states"

const MapContainer = styled("div")({
  width: "100%",
  height: "100%",
})

export const Map = () => {
  const yMapRef = useRef<ymaps.Map>()

  const getPlacesData = usePlacesStore((state) => state.getPlacesData)

  const [coordinates, setCoordinates] = useState<{
    lat: number
    lng: number
  }>({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      },
    )
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
    const [
      ne /*north-east северо-восток правый верхний*/,
      sw /*south-west юго-восток левый нижний*/,
    ] = e.get("target").getBounds()
    setBounds({ ne, sw })
    const coords = e.get("coords")
    setCoordinates({ lat: coords[0], lng: coords[1] })
  }

  const getStartedBounds = () => {
    if (yMapRef.current) {
      const [
        ne /*north-east северо-восток правый верхний*/,
        sw /*south-west юго-восток левый нижний*/,
      ] = yMapRef.current.getBounds()
      setBounds({ ne, sw })
    }
  }
  return (
    <MapContainer sx={classes.mapContainer}>
      <YMap
        instanceRef={(yMap) => (yMapRef.current = yMap)}
        style={{ width: "100%", height: "100%" }}
        state={{ center: [coordinates.lat, coordinates.lng], zoom: 10 }}
        onClick={(e: MapEvent) => mapHandler(e)}
        onLoad={() => getStartedBounds()}
      />
    </MapContainer>
  )
}

