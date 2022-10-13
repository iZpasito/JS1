import React from "react";
//import reportWebVitals from './reportWebVitals';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import RecovPass from "./components/NewPass";
import RegUsu from "./components/RegistrarUsu";
import Home1 from './pages/home11'
import Informaciones from "./pages/informaciones";
import Login from './pages/login';
//import Notfoundpage from './cmponents/notfound';
//import Rhead from './cmponents/header';
//import BarraNav from './cmponents/bnav';
//import Rfooter from './cmponents/footer';


export  default function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/informaciones' element={<Informaciones/>}/>
            <Route path='/register/usuario' element={<RegUsu/>}/>
            <Route path='/recover/contraseña' element={<RecovPass/>}/>
        </Routes>
    </BrowserRouter>
    )
};

 