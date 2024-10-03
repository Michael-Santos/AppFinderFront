import { Imovel } from "../interfaces/Imovel"

const MapCanvas = ( { imoveis } : {
    imoveis : Imovel[]
} ) => {
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
                {imoveis?.map((consulta : Imovel) => (
                    <tr>
                        <td>{consulta.id}</td>
                        <td>{consulta.address}</td>
                        <td>{consulta.bathrooms}</td>
                        <td>{consulta.longitude}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default MapCanvas