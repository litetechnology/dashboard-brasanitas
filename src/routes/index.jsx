import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Equipamentos from "../pages/equipamentos";
import Dashboard from "../pages/dashboard";
import Relatorio from "../pages/relatorio";
import Formulario from "../pages/formulario";
import Segurance from "../pages/segurance";
import Equipe from "../pages/equipe";
import Error from "../pages/error";
import Local from '../pages/local';
import Plate from "../pages/plate";
import Main from '../pages/main';
import Book from "../pages/book";

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/segurance/dashboard" element={<Segurance />}/>
          <Route path="/formulario" element={<Formulario />}/>
          <Route path="/equipamentos" element={<Equipamentos />}/>
          <Route path="/veiculos" element={<Plate />}/>
          <Route path="/equipe" element={<Equipe />}/>
          <Route path="/relatorio" element={<Relatorio />}/>
          <Route path="/local" element={<Local />}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/book" element={<Book />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router