import React from "react";
import BarraNav from "./bnav";
import Rfooter from "./footer";
import Rhead from "./header";
import Ffooter from "./finfooter";
import '../styles/tabla.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { Link } from "react-router-dom"
/*
import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
*/
const URL = 'http://localhost:8000/Usuarios/'

const MostrarUsuarios = () =>{
    const [Usuarios, setUsers] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])
    //Procedimiento para mostrat Usuarios
    const getUsers = async ()=>{
        const res = await axios.get(URL)
        setUsers(res.data)
    }
    //Procedimiento para eliminar un usuario
    const deleteUser = async(Rut)=>{
        await axios.delete(`${URL}${Rut}`)
        getUsers()
    }
    return(
        <div>
            <Rhead/>
            <BarraNav/>
        <div id='conten'>
            <div className='Centrar'>
                <Link to={"/create"} className="button3">Crear</Link>
            </div>
        <table role="table" >
            <thead >
                <tr role="row" >
                    <th role="columnheader">Rut</th>
                    <th role="columnheader">Tipo usuario</th>
                    <th role="columnheader">Password</th>
                    <th role="columnheader">Token</th>
                    <th role="columnheader">Nombre</th>
                    <th role="columnheader">Apellido paterno</th>
                    <th role="columnheader">Apellido materno</th>
                    <th role="columnheader">Acciones</th>
                </tr>
            </thead>
            <tbody>
                { Usuarios.map ( (Usuario)=>(
                    <tr key={Usuario.Rut}>
                        <td>{Usuario.Rut}</td>
                        <td>{Usuario.Tipo_Usuario}</td>
                        <td>{Usuario.Pasword}</td>
                        <td>{Usuario.Token}</td>
                        <td>{Usuario.Nombre}</td>
                        <td>{Usuario.Ap_paterno}</td>
                        <td>{Usuario.Ap_materno}</td>
                        <td>
                            <Link to={`/edit/${Usuario.Rut}`} className="button1">Editar</Link>       
                            <button type='submit' onClick={ ()=> deleteUser(Usuario.Rut)} className="button2">Eliminar</button>
                        </td>
                    </tr>

                    )
                            
                )}
            </tbody>
        </table>
        <div className="fffooter">
        <Rfooter/>
        <Ffooter/>
        </div>
        </div>
        </div>
    )
}


export default MostrarUsuarios
/*
export default function RegUsu(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div>
                <div>
                    <h1>Registrar Usuario</h1>
                    <form>
                        <div><input type="text" placeholder="R.U.N Ej:10.264.294-8"></input></div>
                        <div><input type="text" placeholder="Nombres"></input></div>
                        <div><input type="text" placeholder="Apellido Paterno"></input></div>
                        <div><input type="text" placeholder="Apellido Materno"></input></div>
                        <div><input type="text" placeholder="Contraseña"></input></div>
                        <div><input type="text" placeholder="Rol"></input></div>
                        <button>Registrar</button> 
                    </form>
                </div>
            </div>
            <hr/>
            <Rfooter/>
        </div>
    )

    */