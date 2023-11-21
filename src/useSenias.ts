import { useEffect, useState } from "react";
import {useParams, useSearchParams} from "react-router-dom";

export interface Senia{
    Id:  string,
    IdCategoria: string,
    Titulo: string,
    Descripcion: string,
    EsVideo: boolean,
    Url: string
}

export const useSenias = () => {
    const {idCategoria} = useParams();
    const [search, setSearch] = useSearchParams();

    const registroVacio : Senia = {
        Id: "",
        IdCategoria: idCategoria || "",
        Titulo: "",
        Descripcion: "",
        EsVideo: false,
        Url: ""
    };

    const [registro, setRegistro] = useState<Senia>(registroVacio);
    const [mostrar, setMostrar] = useState(false);
    const [senias, setSenias] = useState<Senia[]>([]);
    const [categoria, setCategoria] = useState("");

    useEffect(()=>{
        listarSenias();
        setCategoria(search.get("categoria") || "")
    }, []);

    useEffect(()=>{
        setRegistro(registroVacio);
    }, [mostrar]);

    const dataChanged = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        const item ={
            ...registro,
            [e.target.id]: e.target.value
        };

        setRegistro(item);
    }

    const videoChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const item ={
            ...registro,
            EsVideo: e.target.checked
        };

        setRegistro(item);
    }

    const onCerrarVentana = () => {
        setMostrar(false);
    }

    const onGuardar = async () => {
        const resp = await fetch("http://localhost:4000/lenguaje/CrearRegistro", {
            method: "POST",
            body: JSON.stringify(registro),
            headers: {
              "Content-Type": "application/json"     
            }
        });

        if(resp.ok){
            onCerrarVentana();
            listarSenias();
        }
        else{
            const error = await resp.text();
            alert("Error al insertar el registro " + error);
        }
    }

    const listarSenias = async () => {
        const resp = await fetch("http://localhost:4000/lenguaje/" + idCategoria);
        if(resp.ok){
            const arr = await resp.json();
            setSenias(arr);
        }
        else{
            const error = await resp.text();
            alert("Error al listar las señas " + error);
        }
    }

    const onEliminar = async (registro: Senia) => {
        if(!confirm("¿Desea eliminar el registro " + registro.Titulo + "?")){
            return;
        }

        const resp = await fetch("http://localhost:4000/lenguaje/" + registro.Id, {
            method: "DELETE"
        });

        if(resp.ok) {
            listarSenias();
        }
        else{
            const error = await resp.text();
            alert("Error al listar las señas " + error);
        }
    }

    return{
        mostrar,
        onCerrarVentana,
        registro,
        dataChanged,
        videoChanged,
        onGuardar,
        senias,
        onEliminar,
        setMostrar,
        categoria
    };
}

