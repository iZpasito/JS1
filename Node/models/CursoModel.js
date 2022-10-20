//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";
const UserModel = db.define('Usuarios',{
    Rut: {type:DataTypes.STRING,
        primaryKey: true,},
    Tipo_Usuario: {type:DataTypes.STRING},
    Pasword: {type:DataTypes.STRING},
    Token: {type:DataTypes.STRING},
    Nombre: {type:DataTypes.STRING},
    Ap_paterno: {type:DataTypes.STRING},
    Ap_materno: {type:DataTypes.STRING},
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
const users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },
})
*/
export default UserModel