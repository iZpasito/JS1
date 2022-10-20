import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/notasf.css'
import { Link } from "react-router-dom";


let chelo = 'marcelo';
export default function NotasCE(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'> 
                <div className="Notas-Cont"><h1>Nombre del Alumno: {chelo} </h1></div>
                <div className="btn-crear-xd1"><button className="btn-crear-xdd1"><Link to='/notas'>Crear</Link></button></div>
                    <table className="table-notasf">
                        <tbody>
                            <tr>
                                <th>Asignatura</th>
                                <th>Nota</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <td>Matematicas</td>
                                <td>3,0</td>
                                <td>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</td>
                                <td>                        
                                    <button type='submit'className="btn-edit"><Link to='/edit/notas'>Editar</Link></button>
                                    <button type='submit'className="btn-del">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                <Rfooter/>
                <Ffooter/> 
            </div>
        </div>
    )
}