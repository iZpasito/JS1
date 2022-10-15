import React from "react";
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'

export default function Rhead(){
    return(
        <div className="pagePhone">
            <div id='p1'>
                <a href="MiNum.cl">
                    <strong><FaPhoneAlt size='18px'/>Contacto +569 7510 2136</strong>
                </a>
            </div>
            <div id='p2'>
                <a id='ap2'href="minu.cll">
                    <strong><SiGmail size='18px'/>contacto@contacto.cl</strong>
                </a>
            </div>
        </div>
    )
}
