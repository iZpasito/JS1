import express from 'express'
import { getDocentes, getDocente, createDocente } from '../controllers/DocenteController.js'
const router = express.Router()

router.get('/',getDocentes)
router.get('/:Id_Docente',getDocente)
router.post('/',createDocente)

export default router