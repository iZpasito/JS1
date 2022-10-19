import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/avisos.css'

export default function Aviso(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten1'>
            <div class="post-right-content" >
				<div class="entry-title-wrapper"><h3 class="entry-title">Oferta de Trabajo PFalimentos</h3></div>
					
				</div>
                <hr className="hr1"/>
            </div>
            <Rfooter/>
            <Ffooter/>    
        </div>
    )
}