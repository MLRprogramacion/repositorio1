import { useFetcher, useNavigate } from "react-router-dom";
import {useState} from "react";
import traductor from "./assets/traductor.png";
import "./estilos/registro.css";

const Registrarme = () => {

    const navigate = useNavigate();

    const [correo, setCorreo]= useState("");
    const [nombre, setNombre]= useState("");
    const [password, setPassword]= useState("");

    const onRegistrarme = async () => {{
        const url = "http://localhost:4000/Usuarios/Registrar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                Nombre: nombre,
                EmailId: correo,
                Contrasenia: password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.json();
            alert(mensaje);
        }
        else{
            alert("Usuario registrado correctamente");
            navigate("/");
        }

    } }

    return (
        <div className="contenedor">
            <div className="titulo">Registrarme</div>
            <div>
                <img src={traductor} className="logo"/>
            </div>

            <div className="agrupador-correo">
                <div>Correo Electronico</div>
                <div>
                    <input
                    type="text"
                    placeholder="E-mail ID"
                    className="caja-correo"
                    value={correo}
                    onChange={(e)=> setCorreo(e.target.value)} />
                </div>
            </div>

            <div className="agrupador-nombre">
                <div>Nombre</div>
                <div>
                    <input
                    type="text nombre"
                    placeholder="Nombre"
                    className="caja-nombre"
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)} />
                </div>
            </div>

            <div className="agrupador-password">
                <div>Contraseñas</div>
                <div>
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="caja-password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                    />
                </div>
            </div>+
            <div className="agrupador-boton">
                <button className="boton-registrarme" onClick={()=> onRegistrarme() }>Registrarme</button>
                </div>

                <div className="otros-botones">
                    <a href="/" className="link-registro">Regresar</a>
                </div>
            </div>
    )
}

export default Registrarme

