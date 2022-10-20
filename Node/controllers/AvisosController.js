//importar modelo 
import AvisosModel from "../models/AvisosModel.js";
//import SecreModel from "../models/SecreModel.js";
//Metodos para el crud

///PROCEDIMIENTOS///
//mostrar registros
export const getAvisos = async (req,res) =>{
    try {
        const avisos = await AvisosModel.findAll()
        res.json(avisos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getAviso = async(req, res) =>{
    try {
        const aviso = await AvisosModel.findAll({
            where:{
                id_avisos:req.params.id_avisos
            }
        })
        res.json(aviso[0])
    } catch (error) {
        res.json({message: error.message})   
    }
}
//mostrar por id de secretario
export const getAvisosbySecre = async(req, res)=>{
    try {
        const avisoss = await AvisosModel.findAll({
            where:{
                Id_secretario:req.params.Id_secretario
            }
        })
        res.json(avisoss)
    } catch (error) {
        res.json({message: error.message})   
    }
}

//Crear un registro
export const createAviso = async(req, res)=>{
    try {
        await AvisosModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})    
    }
}

//actualizar un registro
export const updateAviso =async(req,res)=>{
    try {
        await AvisosModel.update(req.body, {
            where: { id_avisos: req.params.id_avisos}
        })
        res.json({
            "message":"!Registro actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
//eliminar un registro
export const deleteAviso =async(req,res)=>{
    try {
        await AvisosModel.destroy({
            where: { id_avisos: req.params.id_avisos}
        })
        res.json({
            "message":"!Registro eliminado correctamente¡"
        })
    } catch (error) {
        res.json({message:error.message}) 
    }
}
