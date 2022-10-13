import React from "react";
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Rfooter(){
    return(
        <div>
            <div className="Footer-fondo" color='red'>
                <div className="Acerca-de">Acerca de</div>
                <div>
                    <div className="QSomos"><p>Somos un colegio ilegal donde lavamos dinero y robamos niños.</p></div>
                </div>
                <div>
                    <div className="FC-footer">
                        <a href="www.facebook.com"><FaFacebook size='18px'/></a>
                    </div>
                    <div className="Ig-footer">
                        <a className="Ig-link" href="www.instagram.com"><FaInstagram size='18px'/></a>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <div className="Contactos">Contactos</div>
                <div><HiLocationMarker size='18px'/> Nunca jamas jiji</div>
                <div><FaPhoneAlt size='18px'/> 9 7510 2136</div>
                <div><SiGmail size='18px'/> contacto@contacto.cl</div>
            </div>
            <div>
                <div className="pg-ct"></div>
                <div className="Contactanos">Contactanos</div>
                <div className="pg-mgbox"></div>
                <form>
                    <div><input type='text' placeholder='Nombre'></input></div>
                    <div><input type='email'placeholder='Email'></input></div>
                    <div><input type='text' placeholder='Asunto'></input></div>
                    <div><input type='tel' placeholder='Telefono'></input></div>
                    <div><textarea rows='6' placeholder='Mensaje'></textarea></div>
                    <div><button type='sumbit'><i className="Env-but">Enviar</i></button></div>
                </form>
            <div>
                <div>
                    <div>
                        <Link to="/">Colegio registrado xd</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}