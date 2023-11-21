import { useNavigate } from "react-router-dom"

export interface CategoriaListadoItem{
    Id: string,
    Nombre: string,
    UrLIcono: string
}

interface Props{
    categorias: CategoriaListadoItem[]
}
const ListadoCategorias = ({categorias}: Props) => {
    const nav =useNavigate();

    return (
        <div className="container mt-4">
            <div className="row">
                {
                    categorias.map(x =>
                        <div className="col-6 col-sm-4 col-lg-3 mb-3" key={x.Id}>
                            <div className= "card h-100" onClick={()=>nav("/lenguaje/" + x.Id + "?categoria=" + x.Nombre)}>
                                <img src={x.UrLIcono} className="card-img-top"/>
                                <div className="card-body d-flex">
                                    <span className="aling-self-end">{x.Nombre}</span>
                                </div>
                            </div>
                        </div>    
                    )
                }
            </div>
        </div>
    )
}

export default ListadoCategorias;