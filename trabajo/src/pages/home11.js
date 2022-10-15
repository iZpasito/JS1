import React from "react";
import BarraNav from "../components/bnav";
import Rhead from "../components/header";
import Rfooter from "../components/footer"
import Ffooter from "../components/finfooter";



export default function Home1(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
        <div  id='conten'>
            <div>
                <h1>CONTENIDO</h1>
                <h1>CONTENIDO</h1>
                <h1>CONTENIDO</h1>
                <h1>CONTENIDO</h1>
                <h1>CONTENIDO</h1>
                

            </div>
        </div>
        <hr/>
        <Rfooter/>
        <Ffooter/>
        </div>
    )
}