import React from "react";
import BarraNav from "../components/bnav";
import Ffooter from "../components/finfooter";
import Rfooter from "../components/footer";
import Rhead from "../components/header";


export default function NotfoundPage(){
        return(
            <div>
                <Rhead/>
                <BarraNav/>
                <div id='conten'>
                    <div id='not'>
                        PAGE NOT FOUND 404
                    </div>
                </div>
                <Rfooter/>
                <Ffooter/> 
            </div>
        )
    }