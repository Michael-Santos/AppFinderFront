import { useEffect, useState } from "react";
import { Imovel } from "../../interfaces/Imovel";
import { useParams } from "react-router";
import MapCanvas from "../../components/MapCanvas";

const Map = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>([])
    const { id }  = useParams<string>()
    const [coordinates, setCoordinates] = useState<number[]>([0, 0])
    
    useEffect(() => {
        fetch(`http://localhost:8080/Query/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const imoveisfiltered = data.filter(_ => _.longitude != null && _.latitude !== null);
            setCoordinates(imoveisfiltered.reduce((previousValue : number[], currentValue : Imovel) => {
                console.log(`Latitude ${currentValue.latitude} Longitude: ${currentValue.longitude}`)
                previousValue[0] = parseFloat(currentValue.latitude) + previousValue[0]
                previousValue[1] = parseFloat(currentValue.longitude) + previousValue[1]
            return previousValue
            }, [0, 0]));
            
            setImoveis(imoveisfiltered);
        })
    }, []);

    return imoveis.length > 0 && coordinates[0] != 0 && <MapCanvas imoveis={imoveis} coordinates={coordinates} />
}

export default Map