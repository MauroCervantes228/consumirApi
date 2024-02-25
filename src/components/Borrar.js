import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export function BorrarUsuario(){
    const params = useParams();
    useEffect(()=>{
        async function borrar(){
            const res=axios.get("http://localhost:3000/api/borrarUsuario/"+params.id);

        }
        borrar();
    },[params.id]);
    return(
        <h1>Borrar usuario</h1>
    )
}