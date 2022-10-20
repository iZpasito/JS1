//importar modelo 
import AsignaturaModel from "../models/AsignaturaModel.js";
//Metodos para el crud
///PROCEDIMIENTOS///
//mostrar registros
export const getAsignaturas = async (req,res) =>{
    try {
        const asignaturas = await AsignaturaModel.findAll()
        res.json(asignaturas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getAsignatura = async(req, res) =>{
    try {
        const asignatura = await AsignaturaModel.findAll({
            where:{
                Id_asignatura:req.params.Id_asignatura
            }
        })
        res.json(asignatura[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}
//Crear un registro
export const createAsignatura = async(req, res)=>{
    try {
        await AsignaturaModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})    
    }
}

//actualizar un registro
export const updateAsignatura =async(req,res)=>{
    try {
        await AsignaturaModel.update(req.body, {
            where: { Id_asignatura: req.params.Id_asignatura}
        })
        res.json({
            "message":"!Registro actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
//eliminar un registro
export const deleteAsignatura =async(req,res)=>{
    try {
        await AsignaturaModel.destroy({
            where: { Id_asignatura: req.params.Id_asignatura}
        })
        res.json({
            "message":"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
