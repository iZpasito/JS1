import React from "react"
import {NavLink} from 'react-router-dom'
import Gato from '../images/gato.jpg' 

export default function BarraNav () {
    return(
        <div className="Bnav-Container">
            <div>
                <img src={Gato} alt="gato"/>
            </div>
            <nav className="Nav-Info">
                <ul>
                    <li>
                       <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/personal'>Personal</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Notas'>Notas</NavLink>
                    </li>
                    <li>
                        <NavLink to='/informaciones'>Informaciones</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};