//importar modelo 
import { hash } from "bcrypt";
import UserModel from "../models/UserModel.js";
//Metodos para el crud

///PROCEDIMIENTOS///
//mostrar registros
   

//actualizar un registro
//Login para usuario

export const Login = async(req, res)=>{
    try {
        const {Rut, Pasword}=req.body;
        const  user = await UserModel.findOne({ where: { Rut: Rut}})
        
        res.json({
            "message":"¡Registro creado correctamente!"
        });
        bcrypt.compare(Pasword,user.Pasword)
    
    } 
    catch (error) {
        res.json({message: error.message})    
    }

}