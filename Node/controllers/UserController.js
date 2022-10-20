//importar modelo 
import hash  from "bcrypt";
import bcrypt from 'bcrypt'
import UserModel from "../models/UserModel.js";
//Metodos para el crud

///PROCEDIMIENTOS///
//mostrar registros
export const getUsers = async (req,res) =>{
    try {
        const usuarios = await UserModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getUser = async(req, res) =>{
    try {
        const usuario = await UserModel.findAll({
            where:{
                Rut:req.params.Rut
            }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}
//Crear un registro
export const createUser = async(req, res)=>{
    try {
        const {Rut,Tipo_Usuario, Pasword,Token,Nombre,Ap_paterno,Ap_materno}=req.body;
        await bcrypt.hash(Pasword,10).then((hash)=>{
             UserModel.create({
                Rut: Rut,
                Tipo_Usuario:Tipo_Usuario,
                Pasword: hash,
                Token: Token,
                Nombre: Nombre,
                Ap_paterno: Ap_paterno,
                Ap_materno:Ap_materno,
            })
        res.json({
            "message":"¡Registro creado correctamente!"
        });
    });
    } 
    catch (error) {
        res.json({message: error.message})    
    }
}
//actualizar un registro
export const updateUser =async(req,res)=>{
    try {
        await UserModel.update(req.body, {
            where: { Rut: req.params.Rut}
        })
        res.json({
            "message":"!Registro actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
//eliminar un registro
export const deleteUser =async(req,res)=>{
    try {
        await UserModel.destroy({
            where: { Rut: req.params.Rut}
        })
        res.json({
            message:"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
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