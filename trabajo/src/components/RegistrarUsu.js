import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "./finfooter";


export default function RegUsu(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div className="conten">
                <div className="cont-rs">
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
            <Rfooter/>
            <Ffooter/>
        </div>
    )
}