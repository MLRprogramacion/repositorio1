import AgregarSenias from "./AgregarSenias";
import Buscador from "./Buscador";
import ListadoSenias from "./ListadoSenias";
import Menu from "./Menu";
import { useSenias } from "./useSenias";

const Senias = () => {
    const {
        dataChanged,
        mostrar,
        onCerrarVentana,
        onEliminar,
        onGuardar,
        registro,
        senias,
        setMostrar,
        videoChanged,
        categoria
    } = useSenias();

    return (
        <div>
            <Menu />
            <Buscador />
            <div className="container">
                <div className="h5">Señas para la categoría <i>{categoria}</i></div>
            </div>

            <ListadoSenias onEliminar={onEliminar} registros={senias} />
            <AgregarSenias
            dataChanged={dataChanged}
            mostrar={mostrar}
            onCerrarVentana={onCerrarVentana}
            onGuardar={onGuardar}
            registro={registro}
            videoChanged={videoChanged}
        />

        <button
        onClick={() => setMostrar(true)}
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "none",
            backgroundColor: "blue",
            boxShadow: "0px 5px 5px #ccc"
        }}>+</button>
        </div>
    )
}
export default Senias