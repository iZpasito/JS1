import React from "react";
import BarraNav from "../components//bnav";
import Rfooter from "../components//footer";
import Rhead from "../components//header";
import Ffooter from "../components/finfooter";
import '../styles/tabla.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:8000/Usuarios/'

const MostrarPersonal = () =>{
    const [Usuarios, setUsers] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])
    //Procedimiento para mostrat Usuarios
    const getUsers = async ()=>{
        const res = await axios.get(URL)
        setUsers(res.data)
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
                    <th role="columnheader">Nombre</th>
                    <th role="columnheader">Apellido paterno</th>
                    <th role="columnheader">Apellido materno</th>
                    <th role="columnheader">Tipo_Usuario</th>
                </tr>
            </thead>
            <tbody>
                { Usuarios.map ( (Usuario)=>(
                    <tr key={Usuario.Rut}>
                        <td>{Usuario.Rut}</td>
                        <td>{Usuario.Nombre}</td>
                        <td>{Usuario.Ap_paterno}</td>
                        <td>{Usuario.Ap_materno}</td>
                        <td>{Usuario.Tipo_Usuario}</td>
                    </tr>
                    )       
                )}
            </tbody>
        </table>
        <Rfooter/>
        <Ffooter/>
        </div>
        </div>
    )
}
export default MostrarPersonal