import { useParams } from "react-router";
import { Imovel } from "../../interfaces/Imovel";
import { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const Consulta = () => {
    const [imoveis, setImoveis] = useState<Imovel[]>(); 
    const { id }  = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URI}/Query/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            setImoveis(data);
        })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Endereço</TableCell>
                        <TableCell align="left">Dimensão</TableCell>
                        <TableCell align="left">Coordenadas</TableCell>
                        <TableCell align="left">Preço</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {imoveis?.map((imovel: Imovel) => (
                    <TableRow key={imovel.id}>
                        <TableCell component="th" scope="row">
                            {imovel.id}
                        </TableCell>
                        <TableCell align="left">{imovel.address}</TableCell>
                        <TableCell align="left">{imovel.dimension}</TableCell>
                        <TableCell align="left">{imovel.latitude ? imovel.longitude + ' , ' + imovel.longitude : ''}</TableCell>
                        <TableCell align="left">{imovel.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>                
    )
}

export default Consulta