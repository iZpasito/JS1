import express from 'express'
import { getCursos, getCurso, createCurso, updateCurso, deleteCurso } from '../controllers/CursoController.js'
const router = express.Router()

router.get('/',getCursos)
router.get('/:Id_curso',getCurso)
router.post('/',createCurso)
router.put('/:Id_curso',updateCurso)
router.delete('/:Id_curso',deleteCurso)


export default router