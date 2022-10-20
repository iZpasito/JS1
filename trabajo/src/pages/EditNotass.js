import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/notasf.css'
import { Link } from "react-router-dom";


let chelo = 'marcelo';
export default function NotasC(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'> 
                <div className="Notas-Cont"><h1>Nombre del Alumno: {chelo} </h1></div>
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
                                <td><input type='number'></input></td>
                                <td className='edit-td'><input className="edit-tarea" type='text' size='60'></input></td>
                                <td>                        
                                    <button type='submit'className="btn-edit-u"><Link to='/notasf'>Enviar</Link></button> 
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