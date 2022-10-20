/* import React from "react";
import BarraNav from "./bnav";
import Rfooter from "./footer";
import Rhead from "./header";
import Ffooter from "./finfooter";
import '../styles/tabla.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8000/Docente/'

const MostrarDocente = () =>{
    const [Docente, setDocente] = useState([])
    useEffect( ()=>{
        getDocentes()
    },[])
    //Procedimiento para mostrat Usuarios
    const getDocentes = async ()=>{
        const res = await axios.get(URL)
        setDocente(res.data)
    }
    const [Usuarios, setUsers] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])
    //Procedimiento para mostrat Usuarios
    const getUsers = async ()=>{
        const res = await axios.get(URL)
        setUsers(res.data)
    }

    //Procedimiento para eliminar docente
    const deleteDocente = async(Id_docente)=>{
        await axios.delete(`${URL}${Id_docente}`)
        getDocentes()
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
                    <th role="columnheader">Id</th>
                    <th role="columnheader">Rut</th>
                    <th role="columnheader">Nombre</th>
                    <th role="columnheader">Apellido paterno</th>
                    <th role="columnheader">Apellido materno</th>
                    <th role="columnheader">Acciones</th>
                </tr>
            </thead>
            <tbody>
    
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
export default MostrarDocente */