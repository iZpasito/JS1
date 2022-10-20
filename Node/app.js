import  express  from "express"
import cors from 'cors'

import db from "./database/db.js"

import UserRoutes from './routes/routes.js'
import SecretariosRoutes from './routes/Secretario.js'
import AvisosRoutes from './routes/Avisos.js'
import AsignaturasRoutes from './routes/Asignaturas.js' 
import CursosRoutes from './routes/Cursos.js' 
import NotasRoutes from './routes/Notas.js' 
import DocentesRoutes from './routes/Docente.js'
const app = express()

app.use( cors())
app.use(express.json())
app.use('/Usuarios', UserRoutes)
app.use('/Secretario', SecretariosRoutes)
app.use('/Avisos', AvisosRoutes)
app.use('/Asignaturas', AsignaturasRoutes)
app.use('/Cursos', CursosRoutes)
app.use('/Notas',NotasRoutes)
app.use('/Docentes',DocentesRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la db')
} catch (error) {
    console.log('El error de conexion es:${error}')
}
/*app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})
*/

app.listen(8000, ()=>{
    console.log('Server up runing in http://localhost:8000/')
})