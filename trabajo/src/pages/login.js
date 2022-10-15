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
                <h1>LOGIN</h1>
                <form>
                    <div><input type="text" placeholder="R.U.N Ej:10.264.294-8"></input></div>
                    <div><input type="text" placeholder="Contraseña"></input></div>
                </form>
                <Link to='/register/usuario'>Registra Usuario</Link>
                <br/>
                <Link to='/recover/contraseña'>¿Olvidaste tu contraseña?</Link>
            </div>
            <hr/>
            <Rfooter/>
            <Ffooter/>
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