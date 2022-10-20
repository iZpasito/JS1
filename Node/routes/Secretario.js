import express from 'express'
import { getSecretarios, getSecretario, createSecretario, } from '../controllers/SecretarioController.js'
const router = express.Router()

router.get('/',getSecretarios)
router.get('/:Id_secretario',getSecretario)
router.post('/',createSecretario)

export default router