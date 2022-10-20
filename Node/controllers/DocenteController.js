//importar modelo 
import DocenteModel from "../models/DocenteModel.js";

//Metodos para el crud

///PROCEDIMIENTOS///
//mostrar registros
export const getDocentes = async (req,res) =>{
    try {
        const docentes = await DocenteModel.findAll()
        res.json(docentes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Borrar un registro
export const deleteDocente = async(req, res) =>{
    try {
        const docente = await DocenteModel.destroy({
            where:{
                Id_docente:req.params.Id_docente
            }
        })
        res.json(docente[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}



//Crear un registro
export const createDocente = async(req, res)=>{
    try {
        await DocenteModel.create(req.body)
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