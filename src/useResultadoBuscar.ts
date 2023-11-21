import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export interface SeniaBusquedaItem {
    Id: string,
    IdCategoria: string,
    Titulo: string,
    Descripcion: string,
    EsVideo: boolean,
    Url: string
}

export const useResultadoBuscar = () => {
    const [busqueda] = useSearchParams();
    const [texto] = useState<string|null>(busqueda.get("texto"));
    const [registros, setRegistros] = useState<SeniaBusquedaItem[]>([]);

    const buscarRegistros = async () => {
        const resp = await fetch ("http://localhost:4000/Lenguaje/Buscar?texto=" + texto);
        if(resp.ok){
            const arr = await resp.json();
            setRegistros(arr);
        }
        else {
            const error = await resp.text();
            alert("Error al mostrar los resultados de Búsqueda " + error);
        }
    }

    useEffect(()=> {
        buscarRegistros();
    }, []);

    return {
        texto,
        registros
    }
}