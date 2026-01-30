'use client'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'

interface MapControllerProps {
  onMapReady: (map: LeafletMap) => void
}

export default function MapController({ onMapReady }: MapControllerProps) {
  const map = useMap()

  useEffect(() => {
    if (map) {
      onMapReady(map)
    }
  }, [map, onMapReady])

  return null
}
