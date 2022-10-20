//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes, INTEGER } from "sequelize";
const AvisosModel = db.define('Avisos',{
    id_avisos: {type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Aviso: {type:DataTypes.STRING},
    Titulo: {type:DataTypes.STRING},
    Id_secretario:{type:DataTypes.INTEGER,
    },
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
export default AvisosModel