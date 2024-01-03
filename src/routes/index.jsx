import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Form from "../pages/formulario";
import Error from "../pages/error";
import Local from '../pages/local';
import Main from '../pages/main';

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/formulario" element={<Form />}/>
          <Route path="/local" element={<Local />}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router