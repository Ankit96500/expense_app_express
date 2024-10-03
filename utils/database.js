import { Sequelize } from "sequelize";

// make connection with db
const sequelize = new Sequelize('expense_db','root','1Ankit@2002',{
    host:'localhost',
    dialect:'mysql'
});


export default sequelize;


