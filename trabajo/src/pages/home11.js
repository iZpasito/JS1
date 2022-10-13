import React from "react";
import BarraNav from "../components/bnav";
import Rhead from "../components/header";
import Rfooter from "../components/footer"



export default function Home1(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
        <div>
            <div>
                <h1>CONTENIDO</h1>
            </div>
        </div>
        <hr/>
        <Rfooter/>
        </div>
    )
}