import { Button, Modal } from "react-bootstrap"
import { Senia } from "./useSenias"

interface Props{
    mostrar: boolean,
    onCerrarVentana: () => void,
    registro: Senia,
    dataChanged: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void,
    videoChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onGuardar: () => void
}

const AgregarSenias = ({mostrar, onCerrarVentana, registro, dataChanged, videoChanged, onGuardar} : Props) => {
   
    return (
        <Modal show={mostrar} onHide={onCerrarVentana}>
            <Modal.Header closeButton>
            <Modal.Title>Nueva Seña</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <div className="col-12">
                <div className="mb-3">
                    <label>Titulo</label>
                    <input
                       type="text"
                       id= "Titulo"
                       className="form-control"
                       value={registro.Titulo}
                       onChange={dataChanged}
                       />
                </div>
            </div>
            <div className="col-12">
                <div className="mb-3">
                    <label>Descripción</label>
                    <textarea
                        id="Descripcion"
                        className="form-control"
                        value={registro.Descripcion}
                        onChange={dataChanged}
                        ></textarea>
                </div>
            </div>
            <div className="col-12">
                <div className="mb-3">
                    <label>Url</label>
                    <input
                      type="text"
                      id="Url"
                      className="form-control"
                      value={registro.Url}
                      onChange={dataChanged}
                      />
                </div>
            </div>
            <div className="col-12">
                <label><input type="checkbox" id="EsVideo" checked={registro.EsVideo} onChange={videoChanged} /> Es Video</label>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCerrarVentana}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={onGuardar}>
                    Guardar
                </Button>
            </Modal.Footer>
            </Modal>
  )
}
export default AgregarSenias