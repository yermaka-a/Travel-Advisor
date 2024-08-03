export interface PlaceDetails {
  name: string
  xid: string
  kinds?: string
  address: {
    house_number: string
    suburb: string
    state: string
    country: string
    city: string
  }
  osm: string
  image: string
  wikidata: string
  rate: string
  description: string
  type: string
  wikipedia_extracts?: {
    text: string
    title: string
    html: string
  }
  preview?: {
    source: string
    width: number
    height: number
  }
  wikipedia?: string
  voyage?: string
  url?: string
  bbox?: {
    lon_min: number
    lon_max: number
    lat_min: number
    lat_max: number
  }
  point: {
    lon: number
    lat: number
  }
}

export interface Place {
  name: string
  xid: string
  kind: string
  osm: string
  point: {
    lon: number
    lat: number
  }
  rate: number
}
