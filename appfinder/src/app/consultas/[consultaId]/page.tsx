import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Imovel } from '@/interfaces/Imovel';

async function getData(consultaId: string) {
  try {
    const response = await fetch(`${process.env.BASE_URI}/Query/${consultaId}`)
    if (!response.ok) console.log("ocorreu um erro")
    return response.json()
  }
  catch (exception) {
    console.log("um erro ocorreu")
  } 
}

export default async function Consulta( {params} : {
  params : { consultaId: string}
} ) {
  const imoveis = await getData(params.consultaId)
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Endereço</TableCell>
            <TableCell align="right">Tamanho</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {imoveis.map((imovel : Imovel) => (
            <TableRow
              key={imovel.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {imovel.id}
              </TableCell>
              <TableCell align="right">{imovel.address}</TableCell>
              <TableCell align="right">{imovel.dimension}</TableCell>
              <TableCell align="right">{imovel.latitude}</TableCell>
              <TableCell align="right">{imovel.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}