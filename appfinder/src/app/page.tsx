import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Home Page'
}


export default function Consultas() {
  return (
    <>
      <Link href="/consultas">Consultas</Link>
    </>
  )
}
