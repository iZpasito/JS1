import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";

export default function Informaciones(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'>
                <div className="Infor-cont">
                    <div className="infor-cont-final">
                    <h1>Informaciones</h1>
                        <div><input className="titulo-inf" type="text" placeholder="Titulo"></input></div>
                    <h2>Asunto</h2>
                        <div><textarea className="text-inf" row='6' placeholder="Comentario"></textarea></div>
                        <button className="btn-env">Enviar</button>
                    </div>

                </div>

            </div>
            <Rfooter/>
            <Ffooter/>    
        </div>
    )
}

