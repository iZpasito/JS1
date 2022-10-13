import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";


export default function RecovPass(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div>
                <div>
                    <h2>Restablecer Contraseña</h2>
                    <form> 
                        <div><h3>Nueva Contraseña</h3></div>
                        <div><input type="password" placeholder="pepito123@"></input></div>
                        <div><h3>Repita Nueva contraseña</h3></div>
                        <div><input type="password" placeholder="pepito123@"></input></div>
                        <button>Confirmar</button>
                    </form>
                </div>
            </div>
            <hr/>
            <Rfooter/>
        </div>
    )
}