import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/avisos.css'


export default function UpdateAvisos(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten1'>
                <div className="Infor-cont">
                    <form className="form-inf">
                    <h1>Informaciones</h1>
                        <div className="titulo-upd-inf"><h3 className="h2-upd">holaasdsadasdasdasdasdasdasdasdasdasdasdasdasdas</h3></div>
                    <h2>Asunto</h2>
                        <div className="text-inf" ><textarea row='6' placeholder="Comentario"></textarea></div>
                        <button type='submit' className="btn-act">Actualizar</button>
                    </form>
                </div>
            </div>
            <Rfooter/>
            <Ffooter/>    
        </div>
    )
}

