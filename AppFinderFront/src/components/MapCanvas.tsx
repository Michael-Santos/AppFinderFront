import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';
import { Imovel } from '../interfaces/Imovel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const MapCanvas = ( { imoveis,  coordinates} : {
    imoveis : Imovel[], coordinates : number[]
} ) => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    const markers = useMemo(() => imoveis.map(imovel => (
    <Marker key={imovel.id}
        longitude={Number(imovel.longitude)}
        latitude={Number(imovel.latitude)}>
        <FmdGoodIcon />
    </Marker>)
    ), [imoveis]);

    console.log(`Num imóveis: ${imoveis.length}`)

    return (
    <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
            latitude: coordinates[0] / imoveis.length,
            longitude: coordinates[1]  / imoveis.length,
            zoom: 13
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
    >
        {markers}
    </Map>
    )
}

export default MapCanvas