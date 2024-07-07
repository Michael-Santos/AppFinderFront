import MapCanvas from '../../../../components/mapCanvas'
import { Imovel } from '@/interfaces/Imovel'

async function getData(consultaId: string) : Promise<Imovel[]> {
  try {
    const response = await fetch(`${process.env.BASE_URI}/Query/${consultaId}`)
    if (!response.ok) console.log("ocorreu um erro")
    return response.json()
  }
  catch (exception) {
    console.log("um erro ocorreu")
    return []
  } 
}

export default async function Mapa( {params} : {
  params : { consultaId: string}
} ) {  

  const imoveis = await getData(params.consultaId)
  //console.log(imoveis)

  return (
    <MapCanvas dados={imoveis}/>
  );
}