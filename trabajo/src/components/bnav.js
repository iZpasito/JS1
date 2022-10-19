import React from "react"
import {NavLink} from 'react-router-dom'
import ewaldorf from '../images/ewaldorf.png'
import '../styles/navnew.css'



export default function BarraNav () {
    return(
        <div className="Container">
            <nav className="Menu">
                <div className="Imenu">
                    <img  className="Esc-im" src={ewaldorf} alt="ewalforf"/>
                    <div className="tet">
                        <h1>Escuela Waldorf Alywen</h1>
                    </div>  
                </div>
                <div className='menu' >
                    <ul>
                        <div className="navcont">
                        <li>
                            <NavLink id='NavClick'to='/'>Home</NavLink>
                        </li>
                        </div >
                        <div className="navcont">
                        <li>    
                            <NavLink id='NavClick' to='/personal'>Personal</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>  
                            <NavLink id='NavClick' to='/notas'>NotasCrea</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>  
                            <NavLink id='NavClick' to='/notasF'>NotasVer</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>  
                            <NavLink id='NavClick' to='/notasC'>NotasEdt</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>  
                            <NavLink id='NavClick' to='/informaciones'>Informaciones</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>
                            <NavLink id='NavClick'  to='/avisos'>Avisos</NavLink>
                        </li>
                        </div>
                        <div className="navcont">
                        <li>
                            <NavLink id='NavClick'  to='/login'>Login</NavLink>
                        </li>
                        </div>
                    </ul>
                    <div>
                        <button id='xd1'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}


