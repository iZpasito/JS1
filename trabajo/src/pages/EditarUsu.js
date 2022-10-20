import React, { useEffect } from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/edusu.css'




const URL = 'http://localhost:8000/Usuarios/'

const EditarUsuario = () =>{
    const [Tipo_Usuario, setTipo_Usuario] = useState('')
    const [Pasword, setPasword] = useState('')
    const [Token, setToken] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Ap_paterno, setAp_paterno] = useState('')
    const [Ap_materno, setAp_materno] = useState('')
    const navigate = useNavigate()

    const {Rut} = useParams()
    

    const update =async (e)=>{
        e.preventDefault()
        await axios.put(URL+Rut,{
            Tipo_Usuario: Tipo_Usuario, Pasword: Pasword,Token:Token,Nombre:Nombre,Ap_paterno:Ap_paterno,Ap_materno:Ap_materno})
        navigate('/mostrar')
    }
    useEffect( ()=>{
        getUserByRut()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const getUserByRut = async()=>{
        const res = await axios.get(URL+Rut)
        setTipo_Usuario(res.data.Tipo_Usuario)
        setPasword(res.data.Pasword)
        setToken(res.data.Token)
        setNombre(res.data.Nombre)
        setAp_paterno(res.data.Ap_paterno)
        setAp_materno(res.data.Ap_materno)
    }
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'>
                <div className="conten-edusu">
                    <h1>Editar Usuario</h1>
                    <form className='form-edusu'onSubmit={update}>
                        <div><input value={Nombre}
                        onChange={ (e)=> setNombre(e.target.value)}  type="text" placeholder="Nombre"></input></div>
                        <div><input value={Pasword}
                        onChange={ (e)=> setPasword(e.target.value)}  type="text" placeholder="Contraseña"></input></div>
                        <div><input value={Token}
                        onChange={ (e)=> setToken(e.target.value)} type="text" placeholder="sdgdsghsdhs"></input></div>
                        <div><input value={Ap_paterno} onChange={ (e)=> setAp_paterno(e.target.value)} type="text" placeholder="Apellido Paterno"></input></div>
                        <div><input value={Ap_materno} onChange={ (e)=> setAp_materno(e.target.value)} type="text" placeholder="Apellido Materno"></input></div>
                        <div><input value={Tipo_Usuario} onChange={ (e)=> setTipo_Usuario(e.target.value)}  type="text" placeholder="Rol"></input></div>
                        <button className='btn-edusu' type='submit'>Actualizar</button> 
                    </form>
                </div>
            </div>
            <hr/>
            <div className="fffooter">
            <Rfooter/>
            <Ffooter/>
        </div>
        </div>
    )
}
export default EditarUsuario