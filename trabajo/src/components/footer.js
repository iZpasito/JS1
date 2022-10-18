import React from "react";
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {SiGmail} from 'react-icons/si'
import {FaPhoneAlt} from 'react-icons/fa'


export default function Rfooter(){
    return(
        <div className="Footer-fondo">
            <div className="Acerca-de-c">
                <div className="Acerca"><h2>Acerca de</h2></div>
                <div>
                    <div className="QSomos"><p>Alywen es una 
                        Escuela de pedagogía Waldorf ubicada en Talca, 
                        que ofrece una educación humanizadora, 
                        integral y en armonía con la naturaleza.</p></div>
                </div>
                <div className="contenedor-fi">
                    <div className="FC-footer">
                        <a href="www.facebook.com"><FaFacebook size='23px'/></a>
                    </div>
                    <div className="Ig-footer">
                        <a className="Ig-link" href="www.instagram.com"><FaInstagram size='23px'/></a>
                    </div>
                </div>
            </div>
            <div id='contact-footer'>
                <div className="Contactos"><h2>Contactos</h2></div>
                <div><HiLocationMarker size='18px'/> Sector Las Tinajas. Talca, Chile</div>
                <div><FaPhoneAlt size='18px'/> 9 5056 5403</div>
                <div><SiGmail size='18px'/> alyweneducacion@gmail.com</div>
            </div>
            </div>
    )
}