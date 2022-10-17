import React from "react";
import { Link } from "react-router-dom";
import BarraNav from "../components/bnav";
//import { useHistory } from "react-router-dom";
//import { useState } from "react";
import Rfooter from "../components/footer";
import Rhead from "../components/header";  
import Ffooter from "../components/finfooter";




export default function Login(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten'>
                <div className="Log-in">
                    <h1>LOGIN</h1>
                    <h3>RUT</h3>
                        <div><input type="text" placeholder="EJ:10.264.294-8"></input></div>
                    <h3>Contraseña</h3>
                        <div><input type="text" placeholder="Contraseña"></input></div>
                    <Link  className="reg"  to='/register/usuario'>Registra Usuario</Link>
                    <br/>
                    <Link className="rec" to='/recover/contraseña'>¿Olvidaste tu contraseña?</Link>
                </div>
            <div className="fffooter">
                <Rfooter/>
                <Ffooter/> 
            </div>   
            </div>
        </div>
    )
}



//function authenticateUser(userName, password) {
//}
//  
//export default function Login(props) {
//  const [userName, setUserName] = useState("");
//  const [password, setPassword] = useState("");
//  
//  const history = useHistory();
//  
//  const handleClick = () => {
//    authenticateUser(userName, password);
//  
//    history.push(`/profile/${userName}`);
//  };
//  
//  return (
//    <div>
//      <input
//        type="text"
//        value={userName}
//        onChange={(e) => {
//          setUserName(e.target.value);
//        }}
//        required
//      />
//      <input
//        type="text"
//        value={password}
//        onChange={(e) => {
//          setPassword(e.target.value);
//        }}
//        required
//      />
//      <button type="submit" onClick={handleClick}>
//        {" "}
//        Iniciar Sesion{" "}
//      </button>
//    </div>
//  );
//}