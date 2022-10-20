import { Sequelize } from "sequelize";
const db = new Sequelize('escueladb','root','mamapapa3157',{
    host:'localhost',
    dialect: 'mysql',
})
export default db