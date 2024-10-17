import { useEffect, useState } from "react";
import { Consulta } from "../../interfaces/Consulta";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const Consultas = () => {
    const [consultas, setConsultas] = useState<Consulta[]>([]); 
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URI}/Query`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            setConsultas(data);
        })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Cidade</TableCell>
                        <TableCell align="right">Estado</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Ver</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {consultas?.map((consulta: Consulta) => (
                    <TableRow key={consulta.id}>
                        <TableCell component="th" scope="row">
                            {consulta.id}
                        </TableCell>
                        <TableCell align="right">{consulta.city}</TableCell>
                        <TableCell align="right">{consulta.state}</TableCell>
                        <TableCell align="right">{consulta.status}</TableCell>
                        <TableCell align="right">
                            <Link to={`/consultas/${consulta.id}`}>
                                <VisibilityIcon />
                            </Link>
                            <Link to={`/consultas/${consulta.id}/mapa`}>
                                <MapIcon />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Consultas