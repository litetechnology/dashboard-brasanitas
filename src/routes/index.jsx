import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Equipamentos from "../pages/equipamentos";
import Dashboard from "../pages/dashboard";
import Link from "../pages/link";
import Relatorio from "../pages/relatorio";
import Formulario from "../pages/formulario";
import Segurance from "../pages/segurance";
import Access from "../pages/access"
import Equipe from "../pages/equipe";
import Error from "../pages/error";
import Local from '../pages/local';
import Plate from "../pages/plate";
import Main from '../pages/main';
import Book from "../pages/book";
import SignIn from "../pages/signin";

import Auth from "./auth";
import SharedDashboard from "../pages/sharedDashboard";

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>

          <Route path="/404" element={<Error />}/>

          <Route path="/invite/:id" element={<SignIn />}/>
          <Route path="/" element={<SignIn />}/>
          <Route path="/formulario" element={<Formulario/>} />

          <Route
  path="/main"
  element={<Auth element={<Main />} />}
/>
          <Route
  path="/config/access"
  element={<Auth element={<Access />} />}
/>
          <Route
  path="/dashboard"
  element={<Auth element={<Dashboard />} />}
/>
          <Route
  path="/shared/operation"
  element={<Auth element={<SharedDashboard />} />}
/>
<Route
  path="/link/dashboard"
  element={<Auth element={<Link />} />}
/>
<Route
  path="/segurance/dashboard"
  element={<Auth element={<Segurance />} />}
/>
<Route
  path="/formulario"
  element={<Auth element={<Formulario />} />}
/>
<Route
  path="/equipamentos"
  element={<Auth element={<Equipamentos />} />}
/>
<Route
  path="/veiculos"
  element={<Auth element={<Plate />} />}
/>
<Route
  path="/equipe"
  element={<Auth element={<Equipe />} />}
/>
<Route
  path="/relatorio"
  element={<Auth element={<Relatorio />} />}
/>
<Route
  path="/local"
  element={<Auth element={<Local />} />}
/>
<Route
  path="/book"
  element={<Auth element={<Book />} />}
/>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router