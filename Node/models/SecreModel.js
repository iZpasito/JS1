//import to conexion a la db
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";
const SecreModel = db.define('Secretario',{
    Id_secretario: {type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Rut: {type:DataTypes.STRING},
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
    
});
SecreModel.associate=(models)=>{
    SecreModel.hasMany(models.AvisosModel,{
        foreignKey: 'Id_secretario',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    });
    models.AvisosModel.belongsTo(SecreModel);
}

export default SecreModel