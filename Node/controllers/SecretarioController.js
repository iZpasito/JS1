//importar modelo 
import SecreModel from "../models/SecreModel.js";

//Metodos para el crud

///PROCEDIMIENTOS///
//mostrar registros
export const getSecretarios = async (req,res) =>{
    try {
        const secretarios = await SecreModel.findAll()
        res.json(secretarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getSecretario = async(req, res) =>{
    try {
        const secretario = await SecreModel.findAll({
            where:{
                Id_secretario:req.params.Id_secretario
            }
        })
        res.json(secretario[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}

//mostrar todos los avisos realizados por el secretario

//Crear un registro
export const createSecretario = async(req, res)=>{
    try {
        await SecreModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})    
    }
}
/*
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
            "message":"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
*/