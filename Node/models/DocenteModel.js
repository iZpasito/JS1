//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";
const DocenteModel = db.define('Docente',{
    Id_docente: {type:DataTypes.STRING,
        primaryKey: true},
    Rut: {type:DataTypes.STRING},
    Id_curso: {type:DataTypes.INTEGER},
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
})
/*
  FOREIGN KEY (Rut) REFERENCES Usuarios(Rut),
  FOREIGN KEY (Id_curso) REFERENCES Curso(Id_curso)
*/
export default DocenteModel