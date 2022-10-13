import React from "react";
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'

export default function Rhead(){
    return(
        <div className="pagePhone">
            <span>
                <a href="MiNum.cl">
                    <strong><FaPhoneAlt size='18px'/>Contacto +569 7510 2136</strong>
                </a>
                <a href="minu.cll">
                    <strong><SiGmail size='18px'/> contacto@contacto.cl</strong>
                </a>
            </span>
        </div>
    )
}
