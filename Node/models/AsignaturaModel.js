//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";
const AsignaturaModel = db.define('Asignatura',{
    Id_asignatura: {type:DataTypes.INTEGER,
        primaryKey: true,},
    Nombre_asignatura: {type:DataTypes.STRING},
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
})

export default AsignaturaModel