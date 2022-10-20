//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";
const NotasModel = db.define('Notas',{
    Nota: {type:DataTypes.INTEGER},
    Descripcion: {type:DataTypes.STRING},
    Id_curso: {type:DataTypes.INTEGER,
        primaryKey: true},
    Id_asignatura: {type:DataTypes.INTEGER,
        primaryKey: true},
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
})

export default NotasModel