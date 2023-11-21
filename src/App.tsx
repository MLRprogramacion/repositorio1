import { BrowserRouter, Route, Routes } from "react-router-dom"
import Acceso from "./Acceso"
import Registro from "./Registro"
import Recuperar from "./Recuperar"
import Categorias from "./Categorias";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Senias from "./Senias";
import ResultadoBuscar from "./ResultadoBuscar";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Acceso />}/>
      <Route path="/registro" element={<Registro />}/>
      <Route path="/recuperar-password" element={<Recuperar />}/>
      <Route path= "/Categorias" element ={<Categorias/>} />
      <Route path="/lenguaje/:idCategoria" element={<Senias />} />
      <Route path="/buscar" element={<ResultadoBuscar />} />
     </Routes>
    </BrowserRouter>
  )
}
export default App
