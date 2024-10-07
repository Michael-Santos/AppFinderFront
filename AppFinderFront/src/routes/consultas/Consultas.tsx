import { useEffect, useState } from "react";
import { Consulta } from "../../interfaces/Consulta";

const Consultas = () => {
    const [consultas, setConsultas] = useState<Consulta[]>(); 
    
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/Query`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            setConsultas(data);
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
                    <th scope="col">Ver</th>
                </tr>
            </thead>
            <tbody>
                {consultas?.map((consulta : Consulta) => (
                    <tr>
                        <td>{consulta.id}</td>
                        <td>{consulta.status}</td>
                        <td>{consulta.city}</td>
                        <td>{consulta.state}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default Consultas