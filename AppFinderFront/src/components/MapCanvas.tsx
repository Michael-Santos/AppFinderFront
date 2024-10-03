import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo } from 'react';
import { Imovel } from '../interfaces/Imovel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const MapCanvas = ( { imoveis } : {
    imoveis : Imovel[]
} ) => {
    console.log(imoveis)
    const imoveisfiltered = imoveis.filter(_ => _.longitude != null && _.latitude !== null);

    const markers = useMemo(() => imoveisfiltered.map(imovel => (
    <Marker key={imovel.id}
        longitude={Number(imovel.longitude)}
        latitude={Number(imovel.latitude)}>
        <FmdGoodIcon />
    </Marker>)
    ), [imoveisfiltered]);

    const calculateMapCenterCoordinates = imoveisfiltered.reduce((previousValue, currentValue, currentIndex, imoveis) => {
        console.log(`Latitude ${currentValue.latitude} Longitude: ${currentValue.longitude}`)
        previousValue[0] = parseFloat(currentValue.latitude) + previousValue[0];
        previousValue[1] = parseFloat(currentValue.longitude) + previousValue[1];
    return previousValue;
    }, [0, 0])

    console.log(`Num imóveis: ${imoveisfiltered.length}`)
    console.log(`Coordenadas ${calculateMapCenterCoordinates[0] / imoveisfiltered.length} ${calculateMapCenterCoordinates[1] / imoveisfiltered.length}`)

    return (
    <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
        latitude: calculateMapCenterCoordinates[0] / imoveisfiltered.length,
        longitude: calculateMapCenterCoordinates[1] / imoveisfiltered.length,
        zoom: 13
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
    >
        {/* {markers} */}
    </Map>
    )
}

export default MapCanvas