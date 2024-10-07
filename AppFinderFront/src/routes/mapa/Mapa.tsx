import { useEffect, useState } from "react";
import { Imovel } from "../../interfaces/Imovel";
import { useParams } from "react-router";
import MapCanvas from "../../components/MapCanvas";

const Map = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>([])
    const { id }  = useParams<string>()
    const [initialCoordinates, setInitialCoordinates] = useState<number[]>([0, 0])
    
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/Query/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data : Imovel[]) => {
            const imoveisfiltered = data.filter(_ => _.longitude != null && _.latitude !== null);
            setInitialCoordinates(CalculateInitialCoordinates(imoveisfiltered));
            setImoveis(imoveisfiltered);
        })
    }, []);

    return <MapCanvas imoveis={imoveis} initialCoordinates={initialCoordinates} />
}

const CalculateInitialCoordinates = (imoveis : Imovel[]) => {
    return imoveis.reduce((previousValue : number[], currentValue : Imovel) => {
        previousValue[0] = parseFloat(currentValue.latitude) + previousValue[0]
        previousValue[1] = parseFloat(currentValue.longitude) + previousValue[1]
        return previousValue
    }, [0, 0])
}

export default Map