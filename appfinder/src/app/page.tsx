import { Metadata } from 'next'
import Link from 'next/link'
import { CssBaseline } from '@mui/material'


export const metadata: Metadata = {
  title: 'Home Page'
}


export default function Consultas() {
  return (
    <>
      <CssBaseline />
      <Link href="/consultas">Consultas</Link>
    </>
  )
}
