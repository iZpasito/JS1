import React from "react";
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Rhead(){
    return(
        <div className="pagePhone">
            <div id='p1'>
                <Link id='ap1' to='/'><FaPhoneAlt size='18px'/> Contacto +569 5056 5403</Link>
            </div>
            <div id='p2'>
            <Link id='ap2' to='/'><SiGmail size='18px'/>  alyweneducacion@gmail.com</Link>
            </div>
        </div>
    )
}
