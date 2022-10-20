//importar modelo 
import { and } from "sequelize";
import NotasModel from "../models/NotasModel.js";
//Metodos para el crud
///PROCEDIMIENTOS///
//mostrar registros
export const getNotas = async (req,res) =>{
    try {
        const Notas = await NotasModel.findAll()
        res.json(Notas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getNota = async(req, res) =>{
    try {
        const Nota = await NotasModel.findAll({
            where:{
                Id_curso,Id_Asignatura:req.params.Id_curso,Id_Asignatura
            }
        })
        res.json(Nota[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}
//Crear un registro
export const createNota = async(req, res)=>{
    try {
        await NotasModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})    
    }
}

//actualizar un registro
export const updateNota =async(req,res)=>{
    try {
        await NotasModel.update(req.body, {
            where: { Id_curso,Id_Asignatura:req.params.Id_curso,Id_Asignatura}
        })
        res.json({
            "message":"!Registro actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
//eliminar un registro
export const deleteNota =async(req,res)=>{
    try {
        await NotasModel.destroy({
            where: { Id_curso,Id_Asignatura:req.params.Id_curso,Id_Asignatura}
        })
        res.json({
            "message":"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
