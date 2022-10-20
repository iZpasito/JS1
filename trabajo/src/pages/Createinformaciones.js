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
            <div id='conten1'>
                <div className="Infor-cont">
                    <form className="form-inf">
                    <h1>Informaciones</h1>
                        <div className="titulo-inf"><input  type="text" placeholder="Titulo"></input></div>
                    <h2>Asunto</h2>
                        <div className="text-inf" ><textarea row='6' placeholder="Comentario"></textarea></div>
                        <button type='submit' className="btn-env">Enviar</button>
                    </form>
                </div>

            </div>
            <Rfooter/>
            <Ffooter/>    
        </div>
    )
}

