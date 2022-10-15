import React from "react"
import {NavLink} from 'react-router-dom'
import Gato from '../images/gato.jpg' 




export default function BarraNav () {
    return(
        <div className="Container">
            <nav className="Menu">
                <div className="Imenu">
                    <img src={Gato} alt="gato"/>
                    <div className="tet">
                        <h1>Escuela rapta niños</h1>
                    </div>  
                </div>
                <div className='menu' >
                    <ul>
                        <li>
                            <NavLink id='NavClick'to='/'>Home</NavLink>
                        </li>
                        <li>    
                            <NavLink id='NavClick' to='/personal'>Personal</NavLink>
                        </li>
                        <li>  
                            <NavLink id='NavClick' to='/notas'>Notas</NavLink>
                        </li>
                        <li>  
                            <NavLink id='NavClick' to='/informaciones'>Informaciones</NavLink>
                        </li>    
                        <li>
                            <NavLink id='NavClick'  to='/login'>Login</NavLink>
                        </li>
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


