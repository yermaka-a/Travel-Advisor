export interface Place {
    name: string
    xid: string
    kinds: string
    osm: string
    _MODIFIED?: boolean
    point: {
        lon: number
        lat: number
    }
    rate: string
}

export type TPlaces = Place[]
