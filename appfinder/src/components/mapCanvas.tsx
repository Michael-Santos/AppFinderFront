'use client'

import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Imovel } from '@/interfaces/Imovel';
import MapIcon from '@mui/icons-material/Map';
import { useMemo } from 'react';

export default function MapCanvas({dados} : {
  dados : Imovel[]
}) {

  

  const imoveisfiltered = dados.filter(_ => _.longitude != null && _.latitude !== null);
  
  const markers = useMemo(() => imoveisfiltered.map(imovel => (
    <Marker key={imovel.id}
      longitude={imovel.longitude}
      latitude={imovel.latitude}>
      <MapIcon />
    </Marker>)
  ), [imoveisfiltered]);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -47.461283,
        latitude: -23.515821,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {markers}
    </Map>
  )
}