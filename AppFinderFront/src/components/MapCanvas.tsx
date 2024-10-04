import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';
import { Imovel } from '../interfaces/Imovel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const MapCanvas = ( { imoveis,  initialCoordinates} : {
    imoveis : Imovel[], initialCoordinates : number[]
} ) => {
    const markers = useMemo(() => imoveis.map(imovel => (
    <Marker key={imovel.id}
        longitude={Number(imovel.longitude)}
        latitude={Number(imovel.latitude)}>
        <FmdGoodIcon />
    </Marker>)
    ), [imoveis]);

    return  imoveis.length > 0 && (
        <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            initialViewState={{
                latitude: initialCoordinates[0] / imoveis.length,
                longitude: initialCoordinates[1]  / imoveis.length,
                zoom: 11
            }}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
        >
            {markers}
        </Map>)    
}

export default MapCanvas