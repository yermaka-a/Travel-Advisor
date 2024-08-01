import React, { useRef, useEffect, useState } from "react"
import { Map as YMap } from "@pbe/react-yandex-maps"
import { useMediaQuery } from "@material-ui/core"

import { usePlacesStore } from "../../states/index"
import useStyles from "./styles"

const Map = () => {
  const classes = useStyles()
  const getPlacesData = usePlacesStore((state) => state.getPlacesData)
  const [bounds, setBounds] = useState(null)
  const [coordinates, setCoordinates] = useState({})
  const { lat, lng } = coordinates
  const yMapRef = useRef(null)
  const isMobile = useMediaQuery("(min-width:600px)")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      },
    )
  }, [])

  useEffect(() => {
    try {
      if (bounds !== null) {
        getPlacesData(bounds.sw, bounds.ne).then((data) => {
          console.log(data)
        })
      }
    } catch (error) {
      console.error("The second UseEffect error: ", error)
    }
  }, [bounds])

  const getCoords = (e) => {
    const [
      ne /*north-east северо-восток правый верхний*/,
      sw /*south-west юго-восток левый нижний*/,
    ] = e.get("target").getBounds()
    const [lat, lng] = e.get("coords")
    setCoordinates({ lat, lng })
    setBounds({ ne, sw })
  }

  const mapHandler = () => {
    const [
      ne /*north-east северо-восток правый верхний*/,
      sw /*south-west юго-восток левый нижний*/,
    ] = yMapRef.current.getBounds()
    setBounds({ ne, sw })
    const [lat, lng] = yMapRef.current.getCenter()
    setCoordinates({ lat, lng })
  }

  return (
    <div className={classes.mapContainer}>
      <YMap
        instanceRef={yMapRef}
        style={{ width: "100%", height: "100%" }}
        defaultState={{ center: [lat, lng], zoom: 14 }}
        state={{ center: [lat, lng], zoom: 14 }}
        onClick={(e) => {
          getCoords(e)
        }}
        onLoad={() => mapHandler()}
      />
    </div>
  )
}

export default Map
