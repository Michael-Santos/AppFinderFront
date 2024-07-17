'use client'

import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Imovel } from '@/interfaces/Imovel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useMemo } from 'react';

export default function MapCanvas({dados} : {
  dados : Imovel[]
}) {
  const imoveisfiltered = dados.filter(_ => _.longitude != null && _.latitude !== null);
  
  const markers = useMemo(() => imoveisfiltered.map(imovel => (
    <Marker key={imovel.id}
      longitude={imovel.longitude}
      latitude={imovel.latitude}>
      <FmdGoodIcon />
    </Marker>)
  ), [imoveisfiltered]);

  const calculateMapCenterCoordinates = imoveisfiltered.reduce((previousValue, currentValue, currentIndex, imoveis) => {
    previousValue[0] = parseFloat(currentValue.latitude) + previousValue[0];
    previousValue[1] = parseFloat(currentValue.longitude) + previousValue[1];
    return previousValue;
  }, [0, 0])

  console.log(`Num imóveis: ${imoveisfiltered.length}`)
  console.log(`Coordenadas ${calculateMapCenterCoordinates[0]} ${calculateMapCenterCoordinates[1]}`)

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        latitude: calculateMapCenterCoordinates[0] / imoveisfiltered.length,
        longitude: calculateMapCenterCoordinates[1] / imoveisfiltered.length,
        zoom: 13
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {markers}
    </Map>
  )
}