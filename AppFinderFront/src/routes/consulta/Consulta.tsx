import { Imovel } from "../../interfaces/Imovel";
import { useEffect, useState } from "react";

const Consulta = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>(); 

    useEffect(() => {
        fetch('http://localhost:8080/Property')
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
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {imoveis?.map((imovel : Imovel) => (
                    <tr>
                        <td>{imovel.id}</td>
                        <td>{imovel.bedrooms}</td>
                        <td>{imovel.bedrooms}</td>
                        <td>{imovel.garage}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
                
    )
}

export default Consulta