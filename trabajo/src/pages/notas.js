import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";


export default function Notas(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'> 
                <div>
                    <h1>Notas del alumno: </h1>
                    <table>
                        <th>XD</th>
                    </table>
                </div>
            </div>
            <hr/>
            <Rfooter/>
            <Ffooter/>
        </div>
    )
}