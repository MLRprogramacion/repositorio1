import { useFetcher, useNavigate } from "react-router-dom";
import {useState} from "react";
import traductor from "./assets/traductor.png";
import "./estilos/registro.css";


const Recuperar = () => {

    const [correo, setCorreo]= useState("");

    const onAceptar = async() => {{
        const url = "http://localhost:4000/Usuarios/RecuperarContrasenia";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                EmailId: correo
            }),
            headers:{
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.text();
            alert(mensaje);
        }
        else{
            alert("Correo enviado");
        }
       
    } 
    }

    return (
        <div className="contenedor">
            <div className="titulo">Olvidé mi Contraseña</div>
            <div>
                <img src={traductor} className="logo"/>
            </div>

            <div className="agrupador-correo">
                <div>
                    <input
                    type="text"
                    placeholder="E-mail ID"
                    className="caja-correo"
                    value={correo}
                    onChange={(e)=> setCorreo(e.target.value)} />
                </div>
            </div>
            <div className="agrupador-boton">
                <button className="boton-aceptar" onClick={()=> onAceptar() }>Aceptar</button>
                </div>

                <div className="otros-botones">
                    <a href="/" className="link-registro">Regresar</a>
                </div>
            </div>
    ) 
}
export default Recuperar