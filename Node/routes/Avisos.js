import express from 'express'
import { createAviso, deleteAviso, getAviso, getAvisos, updateAviso, getAvisosbySecre } from '../controllers/AvisosController.js'
const router = express.Router()

router.get('/',getAvisos)
router.get('/:id_avisos',getAviso)
router.post('/',createAviso)
router.put('/:id_avisos',updateAviso)
router.delete('/:id_avisos',deleteAviso)
router.get('/obtener/:Id_secretario',getAvisosbySecre)


export default router