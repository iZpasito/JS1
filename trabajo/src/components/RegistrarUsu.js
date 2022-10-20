import React from "react";
import BarraNav from "./bnav";
import Rfooter from "./footer";
import Rhead from "./header";
import Ffooter from "./finfooter";
import '../styles/regusu.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:8000/Usuarios/'

const CrearUsuario = () =>{
    const [Rut, setRut] = useState('')
    const [Tipo_Usuario, setTipo_Usuario] = useState('')
    const [Pasword, setPasword] = useState('')
    const [Token, setToken] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Ap_paterno, setAp_paterno] = useState('')
    const [Ap_materno, setAp_materno] = useState('')
    const navigate = useNavigate()

    const almacenamiento =async (e)=>{
        e.preventDefault()
        await axios.post(URL,{Rut: Rut, Tipo_Usuario: Tipo_Usuario, Pasword: Pasword,Token:Token,Nombre:Nombre,Ap_paterno:Ap_paterno,Ap_materno:Ap_materno})
        navigate('/mostrar')
    }
    
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id="conten">
                <div className="cont-rs">
                    <h1>Registrar Usuario</h1>
                    <form className='form-rs'onSubmit={almacenamiento}>
                        <div><input value={Rut}
                        onChange={ (e)=> setRut(e.target.value)} type="text" placeholder="R.U.N Ej:10.264.294-8"></input></div>
                        <div><input value={Nombre}
                        onChange={ (e)=> setNombre(e.target.value)}  type="text" placeholder="Nombre"></input></div>
                        <div><input value={Pasword}
                        onChange={ (e)=> setPasword(e.target.value)}  type="text" placeholder="Contraseña"></input></div>
                        <div><input value={Token}
                        onChange={ (e)=> setToken(e.target.value)} type="text" placeholder="sdgdsghsdhs"></input></div>
                        <div><input value={Ap_paterno} onChange={ (e)=> setAp_paterno(e.target.value)} type="text" placeholder="Apellido Paterno"></input></div>
                        <div><input value={Ap_materno} onChange={ (e)=> setAp_materno(e.target.value)} type="text" placeholder="Apellido Materno"></input></div>
                        <div><input value={Tipo_Usuario} onChange={ (e)=> setTipo_Usuario(e.target.value)}  type="text" placeholder="Tipo Usuario"></input></div>
                        <button  className='btn-reg' type='submit'>Registrar</button> 
                    </form>
                </div>
            </div>
            <Rfooter/>
            <Ffooter/>
        </div>
    )
}
export default CrearUsuario