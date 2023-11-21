import {useState} from "react";
import traductor from "./assets/traductor.png";
import "./estilos/registro.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => {

    const navigate = useNavigate();
    const [correo, setCorreo]= useState("");
    const [password, setPassword]= useState("");

    const onIngresar = async () => {{
        const url = "http://localhost:4000/Usuarios/IniciarSesion";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                EmailId: correo,
                Contrasenia: password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        });

        if(response.ok){
            navigate("/categorias");
        }
        else{
            const error=await response.text();
            alert(error);
        }
       
    } }

    return (
        <div className="contenedor">
            <div className="titulo">Iniciar Sesión</div>
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

            <div className="agrupador-password">
                <div>
                <input
                    type="password"
                    placeholder="Password"
                    className="caja-password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                    />
                </div>
            </div>
            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
                </div>
                <div className="otros-botones">
                    <a href="/registro" className="link-registro">Registrarse</a>
                    <a href="/recuperar-password" className="link-password">Olvide mi contraseña</a>
                </div>
            </div>
    )
}

export default Acceso