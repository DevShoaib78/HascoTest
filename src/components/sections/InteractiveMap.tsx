'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { Map as LeafletMap } from 'leaflet'
import { useTranslations, useLocale } from 'next-intl'

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const CircleMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.CircleMarker),
  { ssr: false }
)
const Tooltip = dynamic(
  () => import('react-leaflet').then((mod) => mod.Tooltip),
  { ssr: false }
)

// Dynamically import the MapController as a separate component that uses useMap internally
const MapController = dynamic(
  () => import('./MapController'),
  { ssr: false }
)

export default function InteractiveMap() {
  const t = useTranslations('destinations')
  const locale = useLocale()

  // HASCO locations with descriptions from translations
  // labelPosition: 'left' for west coast (Red Sea), 'right' for east coast (Arabian Gulf)
  // Coordinates are [latitude, longitude] - adjusted to match the reference map image
  const locations = [
    {
      key: 'magna',
      name: t('locations.magna.name'),
      coordinates: [28.55, 35.15] as [number, number], // Northwest, near Gulf of Aqaba
      labelPosition: 'left' as const,
      description: t('locations.magna.description')
    },
    {
      key: 'diba',
      name: t('locations.diba.name'),
      coordinates: [27.55, 35.55] as [number, number], // Below Magna on Red Sea coast
      labelPosition: 'left' as const,
      description: t('locations.diba.description')
    },
    {
      key: 'alWajh',
      name: t('locations.alWajh.name'),
      coordinates: [26.30, 36.35] as [number, number], // Red Sea coast, NEOM region
      labelPosition: 'left' as const,
      description: t('locations.alWajh.description')
    },
    {
      key: 'yanbu',
      name: t('locations.yanbu.name'),
      coordinates: [24.05, 38.10] as [number, number], // Red Sea industrial port
      labelPosition: 'left' as const,
      description: t('locations.yanbu.description')
    },
    {
      key: 'kap',
      name: t('locations.kap.name'),
      coordinates: [22.45, 39.05] as [number, number], // King Abdullah Port, north of Jeddah
      labelPosition: 'left' as const,
      description: t('locations.kap.description')
    },
    {
      key: 'jeddah',
      name: t('locations.jeddah.name'),
      coordinates: [21.50, 39.20] as [number, number], // Jeddah, main Red Sea port
      labelPosition: 'left' as const,
      description: t('locations.jeddah.description')
    },
    {
      key: 'jazan',
      name: t('locations.jazan.name'),
      coordinates: [16.95, 42.60] as [number, number], // Southern Red Sea coast
      labelPosition: 'left' as const,
      description: t('locations.jazan.description')
    },
    {
      key: 'khafji',
      name: t('locations.khafji.name'),
      coordinates: [28.45, 48.55] as [number, number], // Northeast, near Kuwait border
      labelPosition: 'right' as const,
      description: t('locations.khafji.description')
    },
    {
      key: 'rasAlKhair',
      name: t('locations.rasAlKhair.name'),
      coordinates: [27.15, 49.25] as [number, number], // East coast, below Khafji
      labelPosition: 'right' as const,
      description: t('locations.rasAlKhair.description')
    },
    {
      key: 'dammam',
      name: t('locations.dammam.name'),
      coordinates: [26.45, 50.05] as [number, number], // East coast, Arabian Gulf
      labelPosition: 'right' as const,
      description: t('locations.dammam.description')
    }
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(locations[0]) // Default to first location (Magna)
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null)

  // Memoize the callback to prevent unnecessary re-renders
  const handleMapReady = useCallback((map: LeafletMap) => {
    setMapInstance(map)
  }, [])

  // Zoom control handlers
  const handleZoomIn = () => {
    if (mapInstance) {
      mapInstance.zoomIn()
    }
  }

  const handleZoomOut = () => {
    if (mapInstance) {
      mapInstance.zoomOut()
    }
  }

  useEffect(() => {
    setIsClient(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('map-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  if (!isClient) {
    return (
      <section id="map-section" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-12 w-3/4 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-64 w-full rounded"></div>
            </div>
            <div className="animate-pulse bg-gray-200 h-[500px] rounded-3xl"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="map-section" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Section Heading */}
            <div className="mb-8">
              <p className="text-sm font-heading text-brand-primary tracking-widest uppercase mb-3">
                {t('label')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-heading text-brand-primary mb-6">
                {selectedLocation.name}
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded-full mb-6"></div>
              <p className="text-sm md:text-base text-gray-600 font-body leading-relaxed mb-8">
                {t('subtitle')}
              </p>
            </div>

            {/* Location Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-body leading-relaxed text-base md:text-lg">
                {selectedLocation.description}
              </p>
            </div>

            {/* Location Grid */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {locations.map((location) => (
                <button
                  key={location.key}
                  onClick={() => setSelectedLocation(location)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-all duration-300 ${
                    selectedLocation.name === location.name
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    selectedLocation.name === location.name
                      ? 'bg-white'
                      : 'bg-brand-primary'
                  }`}></div>
                  <span className="text-xs md:text-sm font-body font-medium truncate">{location.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Map */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
              {/* Map Loading Indicator */}
              <div className="absolute inset-0 bg-gray-900/5 pointer-events-none z-[400]"></div>

              <MapContainer
                center={[24.0, 44.0]}
                zoom={5.2}
                minZoom={5}
                maxZoom={10}
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={true}
                doubleClickZoom={false}
                touchZoom={false}
                keyboard={false}
                attributionControl={false}
                maxBounds={[[15.5, 33.5], [32.5, 56.0]]}
                maxBoundsViscosity={1.0}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <MapController onMapReady={handleMapReady} />

                {/* Satellite Imagery Layer */}
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution='Tiles &copy; Esri'
                  minZoom={5}
                  maxZoom={10}
                />

                {/* Location Markers */}
                {locations.map((location) => (
                  <CircleMarker
                    key={location.key}
                    center={location.coordinates}
                    radius={selectedLocation.name === location.name ? 15 : 10}
                    pathOptions={{
                      fillColor: selectedLocation.name === location.name ? '#66AADD' : '#004A81',
                      fillOpacity: selectedLocation.name === location.name ? 1 : 0.8,
                      color: '#ffffff',
                      weight: selectedLocation.name === location.name ? 4 : 2,
                      opacity: 1
                    }}
                    eventHandlers={{
                      click: () => {
                        setSelectedLocation(location)
                      },
                      mouseover: (e) => {
                        if (selectedLocation.name !== location.name) {
                          e.target.setStyle({
                            fillColor: '#66AADD',
                            fillOpacity: 0.9,
                            radius: 12,
                            weight: 3
                          })
                        }
                      },
                      mouseout: (e) => {
                        if (selectedLocation.name !== location.name) {
                          e.target.setStyle({
                            fillColor: '#004A81',
                            fillOpacity: 0.8,
                            radius: 10,
                            weight: 2
                          })
                        }
                      }
                    }}
                  >
                    <Tooltip
                      permanent
                      direction={location.labelPosition}
                      offset={location.labelPosition === 'left' ? [-15, 0] : [15, 0]}
                      className="map-location-label"
                    >
                      {location.name}
                    </Tooltip>
                  </CircleMarker>
                ))}
              </MapContainer>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10 z-[401]"></div>

              {/* Custom Zoom Controls */}
              <div className="absolute top-4 right-4 z-[450] flex flex-col gap-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-white hover:bg-gray-100 text-brand-primary w-10 h-10 rounded-lg shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Zoom in"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-white hover:bg-gray-100 text-brand-primary w-10 h-10 rounded-lg shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Zoom out"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Leaflet CSS */}
      <style jsx global>{`
        @import 'leaflet/dist/leaflet.css';

        .leaflet-container {
          background: #1a1a1a !important;
          font-family: inherit;
        }

        .leaflet-touch .leaflet-control-layers,
        .leaflet-touch .leaflet-bar {
          display: none;
        }

        /* Smooth transitions for markers */}
        .leaflet-marker-icon,
        .leaflet-interactive {
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }

        /* Hide default attribution */
        .leaflet-control-attribution {
          display: none !important;
        }

        /* Location label styling */
        .map-location-label {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          font-family: inherit;
          font-size: 12px !important;
          font-weight: 600 !important;
          color: #ffffff !important;
          text-shadow:
            1px 1px 2px rgba(0, 0, 0, 0.8),
            -1px -1px 2px rgba(0, 0, 0, 0.8),
            1px -1px 2px rgba(0, 0, 0, 0.8),
            -1px 1px 2px rgba(0, 0, 0, 0.8) !important;
          white-space: nowrap !important;
        }

        .map-location-label::before {
          display: none !important;
        }
      `}</style>
    </section>
  )
}
