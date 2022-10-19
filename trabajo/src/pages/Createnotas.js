import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/notasb.css'
import { Link } from "react-router-dom";

export default function Notas(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'> 
                <div className='Notas-fron'><h1> Nombre Alumno: </h1></div>
                <div className="cont-not-b">
                    <form className="form-not-b">
                        <select name="Asignatura">
                          <option value="">Lenguaje y Comunicaciones</option>
                          <option value="">Matematicas</option>
                          <option value="">Ciencias Sociales</option>
                          <option value="">Ciencias Naturales</option>
                          <option value="">Ed. Fisica</option>
                          <option value="">Ingles</option>
                        </select>
                        <input type='number' placeholder="Nota" ></input>
                        <input type='text' placeholder="Descripcion" size='60'></input>
                    </form>
                </div>
                <div className="btn-crear-xd"><button className="btn-crear-xdd"><Link to='/notasf'>Crear</Link></button></div>
                <Rfooter/>
                <Ffooter/> 
            </div>
        </div>
    )
}