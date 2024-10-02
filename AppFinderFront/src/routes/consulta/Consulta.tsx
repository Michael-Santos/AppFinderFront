import { useParams } from "react-router-dom"

const Consulta = () => {
    const { id } = useParams();    
    
    return (
        <h1>Consulta {id}</h1>
    )
}

export default Consulta