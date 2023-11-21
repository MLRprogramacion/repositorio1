import { Senia } from "./useSenias"

interface Props {
    registros: Senia[],
    onEliminar: (item: Senia) => void
}

const ListadoSenias = ({registros, onEliminar}: Props) => {
    const obtenerUrlVideo = (registro: Senia) =>{
        let url = "https://www.youtube.com/embed/";
        const idx = registro.Url.indexOf("?");
        const search = new URLSearchParams(registro.Url.substring(idx));
        url += search.get("v");

        return url;
    }
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    registros.map(x =>
                        <div className="col-6 col-sm-4 col-Ig-3 mb-3" key={x.Id}>
                            <div className="card h-100">
                                {
                                    x.EsVideo
                                    ?
                                    <div className="ratio ratio-16x9">
                                        <iframe src={obtenerUrlVideo(x)} allowFullScreen></iframe>
                                    </div>
                                    : <img src= {x.Url} className="card-img-top"/>
                                }
                                
                                <div className="card-body">||
                                    <h6>{x.Titulo}</h6>
                                    <p>{x.Descripcion}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={()=> onEliminar(x)}>Eliminar</button>
                                </div>
                            </div>
                         </div>
                        )
                }
                {registros.length === 0 && <div className="col-12">No existen señas para mostrar. Agrega una imagen o un video de youtube</div>}
            </div>
        </div>
    )
}
export default ListadoSenias