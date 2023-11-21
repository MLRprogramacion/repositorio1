import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Buscador = () => {
    const [textoBusqueda, setTextoBusqueda] = useState("");

    const onBuscar = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code === "Enter"){
            location.href = "/buscar?texto=" + textoBusqueda;
        }
    }

    return (
        <div className="container mt-4 mb-4">
           <div className="row">
              <div className="col-12">
                   <div className="input-group input-group-lg">
                      <input type="text"
                         className="form-control"
                         placeholder="Ingresa la seña a buscar y preciona Enter"
                         onKeyDown={onBuscar}
                         value={textoBusqueda}
                         onChange={(e)=> setTextoBusqueda(e.target.value)}
                        />
                       <span className="input-group-text">
                          <FaSearch />
                       </span>
                   </div>
              </div>
            </div>
        </div>
    )
}

export default Buscador;