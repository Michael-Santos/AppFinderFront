import { useEffect, useState } from "react";
import { Imovel } from "../../interfaces/Imovel";
import { useParams } from "react-router";
import MapCanvas from "../../components/MapCanvas";

const Map = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>([]); 
    const { id }  = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:8080/Query/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setImoveis(data);
        })
    }, []);
    
    return (
        <>
            <MapCanvas imoveis={imoveis} />
        </>
    )
}

export default Map