import React from "react";
import BarraNav from "../components/bnav";
//import { useHistory } from "react-router-dom";
//import { useState } from "react";
import Rfooter from "../components/footer";
import Rhead from "../components/header";  
import Ffooter from "../components/finfooter";
import '../styles/login.css'


export default function Login(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten1'>
                <div className="Log-in">
                    <h1 className="h1lg">LOGIN</h1>
                    <label className="lab1">RUT</label>
                        <div><input className="inp1"  type="text" placeholder="10.264.294-8"></input></div>
                    <label className="lab2">Contraseña</label>
                        <div><input className="inp2" type="text" placeholder="Contraseña"></input></div>
                    <div><button className="btn-log">Iniciar Sesion</button></div>
                </div>
            </div>
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