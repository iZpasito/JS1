import express from 'express'
import { getAsignaturas, getAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } from '../controllers/AsignaturaController.js'
const router = express.Router()

router.get('/',getAsignaturas)
router.get('/:Id_asignatura',getAsignatura)
router.post('/',createAsignatura)
router.put('/:Id_asignatura',updateAsignatura)
router.delete('/:Id_asignatura',deleteAsignatura)


export default router