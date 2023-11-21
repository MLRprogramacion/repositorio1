import Buscador from "./Buscador";
import Menu from "./Menu";
import { SeniaBusquedaItem, useResultadoBuscar } from "./useResultadoBuscar";

const ResultadoBuscar = () => {
    const {texto, registros} = useResultadoBuscar();
    const obtenerUrlVideo = (registro: SeniaBusquedaItem) => {
        let url = "https://www.youtube.com/embed/";
        const idx= registro.Url.indexOf("?");
        const search = new URLSearchParams(registro.Url.substring(idx));
        url += search.get("v");

        return url;
    }
    return (
        <>
        <Menu />
        <Buscador />
        <div className="container mt-4">
            <h5>Resultados de la búsqueda <i>{texto}</i></h5>
        </div>
        <div className="container mt-4">
            <div className="row">
            <div className="col-12 mb-3"><h6>{registros.length} registros encontrados</h6></div>
            {
                registros.map(x =>
                    <div className="col-6 col-sm-4 col-lg-3 mb-3" key={x.Id}>
                        <div className= "card h-100">
                            {
                                x.EsVideo
                                ?
                                <div className="ratio ratio-16x9">
                                    <iframe src ={obtenerUrlVideo(x)} allowFullScreen></iframe>
                                </div>
                                : <img src ={x.Url} className="card-img-top" />
                            }
                            <div className= "card-body">
                                <h6>{x.Titulo}</h6>
                                <p>{x.Descripcion}</p>
                            </div>
                        </div>
                    </div>
                )
            } 
            </div>
        </div>
        </>
    )
}

export default ResultadoBuscar;
