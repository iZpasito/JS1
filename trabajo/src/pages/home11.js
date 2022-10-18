import React from "react";
import BarraNav from "../components/bnav";
import Rhead from "../components/header";
import Rfooter from "../components/footer"
import Ffooter from "../components/finfooter";
import matriculas from  '../images/matriculas.jpg'
import familia from '../images/familia.jpg'


export default function Home1(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
        <div  id='conten'>
            <div className="page-border1">
                <section className="pborder1"><img  className="matri-img" src={matriculas} alt="matriculas-ewalforf"/><h3 className="prim1">Matriculate con nosotros este 2023</h3></section>
            </div>
            <div className="page-border2">
                <section className="pborder2"><img className="fami-img" src={familia} alt='primavera'/><br/><h3 className="prim2">Primavera con nosotros</h3></section>
            </div>   
            <div className="page-border3">
                <section className="pborder3">GOLLAAA</section>
            </div>
            <div>
            </div>
        </div>
        <Rfooter/>
        <Ffooter/> 
        </div>
    )
}