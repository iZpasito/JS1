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
            <div className="page-border">
            </div>
            <div><h1>hola</h1></div>
        <div className="fffooter">
            <Rfooter/>
            <Ffooter/> 
        </div>
        </div>
        </div>
    )
}