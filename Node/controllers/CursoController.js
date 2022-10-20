//importar modelo 
import CursoModel from "../models/CursoModel.js";
//Metodos para el crud
///PROCEDIMIENTOS///
//mostrar registros
export const getCursos = async (req,res) =>{
    try {
        const cursos = await CursoModel.findAll()
        res.json(cursos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCurso = async(req, res) =>{
    try {
        const curso = await CursoModel.findAll({
            where:{
                Id_curso:req.params.Id_curso
            }
        })
        res.json(curso[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}
//Crear un registro
export const createCurso = async(req, res)=>{
    try {
        await CursoModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})    
    }
}

//actualizar un registro
export const updateCurso =async(req,res)=>{
    try {
        await CursoModel.update(req.body, {
            where: { Id_curso: req.params.Id_curso}
        })
        res.json({
            "message":"!Registro actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
//eliminar un registro
export const deleteCurso =async(req,res)=>{
    try {
        await CursoModel.destroy({
            where: { Id_curso: req.params.Id_curso}
        })
        res.json({
            "message":"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
