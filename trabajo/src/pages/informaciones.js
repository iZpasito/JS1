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
                <div >
                    <h1>Informaciones</h1>
                    <form>
                        <div><input type="text" placeholder="Titulo"></input></div>
                        <div><textarea row='6' placeholder="Comentario"></textarea></div>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
            <hr/>
            <Rfooter/>
            <Ffooter/>
        </div>
    )
}

