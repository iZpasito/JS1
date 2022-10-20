import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Aviso from "./pages/ShowInformaciones";
import Home1 from './pages/home11'
import Informaciones from "./pages/Createinformaciones";
import Login from './pages/login';
import Notas from "./pages/Createnotas";
import NotasCE from "./pages/Updatenotasc";
import NotasC from "./pages/EditNotass";
import NotasF from "./pages/ShowNotas";
import EditarUsuario from "./pages/EditarUsu";
import MostrarUsuarios from "./components/ShowUsers";
import CrearUsuario from "./components/RegistrarUsu";
import UpdateInformaciones from "./pages/UpdateInformaciones";
import UpdateAvisos from "./components/editaviso";
import NotfoundPage from "./pages/notfound";
import MostrarPersonal from "./pages/ShowPersonal";
import MostrarDocente from "./components/ShowDocente";


export  default function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/informaciones' element={<Informaciones/>}/>
            <Route path='/create' element={<CrearUsuario/>}/>            
            <Route path='/notas' element={<Notas/>}/>
            <Route path='/edit/notas' element={<NotasC/>}/>
            <Route path='/notasc' element={<NotasCE/>}/>
            <Route path='/edit/informaciones' element={<UpdateInformaciones/>}/>
            <Route path='/update/avisos' element={<UpdateAvisos/>}/>
            <Route path='/notasf' element={<NotasF/>}/>
            <Route path="/avisos" element={<Aviso/>}/>
            <Route path='/edit/:Rut' element={<EditarUsuario/>}/>
            <Route path="/mostrar" element={<MostrarUsuarios/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
            <Route path='/show/personal' element={<MostrarPersonal/>}/>
            <Route path='/show/docente' element={<MostrarDocente/>}/>
        </Routes>
    </BrowserRouter>
    )
}

