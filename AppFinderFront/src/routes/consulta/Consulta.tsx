import { useParams } from "react-router";
import { Imovel } from "../../interfaces/Imovel";
import { useEffect, useState } from "react";

const Consulta = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>(); 
    const { id }  = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/Query/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            setImoveis(data);
        })
    }, []);

    return (
        <>
            <table>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Tamanho</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                </tr>
            </thead>
            <tbody>
                {imoveis?.map((imovel : Imovel) => (
                    <tr>
                        <td>{imovel.id}</td>
                        <td>{imovel.address}</td>
                        <td>{imovel.dimension}</td>
                        <td>{imovel.latitude}</td>
                        <td>{imovel.longitude}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
                
    )
}

export default Consulta