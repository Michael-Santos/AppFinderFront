import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MapIcon from '@mui/icons-material/Map';
import Link from 'next/link';

interface Consulta {
  id: number,
  status: string,
  city: string,
  state: string,
}

async function getData() {
  try {
    const response = await fetch(`${process.env.BASE_URI}/Query`)
    if (!response.ok) console.log("ocorreu um erro")
    return response.json()
  }
  catch (exception) {
    console.log("um erro ocorreu")
  } 
}

export default async function Consulta() {
  const consultas = await getData()
  console.log(consultas)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Cidade</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Ver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultas.map((consulta : Consulta) => (
            <TableRow
              key={consulta.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {consulta.id}
              </TableCell>
              <TableCell align="right">{consulta.status}</TableCell>
              <TableCell align="right">{consulta.city}</TableCell>
              <TableCell align="right">{consulta.state}</TableCell>
              <TableCell align="right">
                <Link href={`consultas/${consulta.id}`}>
                  <MapIcon/>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}