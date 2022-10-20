import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser, Login } from '../controllers/UserController.js'
const router = express.Router()

router.get('/',getUsers)
router.get('/:Rut',getUser)
router.post('/',createUser)
router.put('/:Rut',updateUser)
router.delete('/:Rut',deleteUser)
router.post('/login',Login)


export default router