import express from 'express'
import { getNotas, getNota, createNota, updateNota, deleteNota} from '../controllers/NotaController.js'
const router = express.Router()

router.get('/',getNotas)
router.get('/:Id_curso,Id_asignatura',getNota)
router.post('/',createNota)
router.put('/:Id_curso,Id_asignatura',updateNota)
router.delete('/:Id_curso,Id_asignatura',deleteNota)

export default router