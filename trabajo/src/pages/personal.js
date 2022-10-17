import React from "react";
import BarraNav from "../components/bnav";
import Ffooter from "../components/finfooter";
import Rfooter from "../components/footer";
import Rhead from "../components/header";


export default function Personal(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'>
                <div>
                    <h1>Personal: </h1>
                    <table>
                        <th>XD</th>
                    </table>
                </div>
            <div className="fffooter">
                <Rfooter/>
                <Ffooter/> 
            </div>
            </div>
        </div>
    )
}