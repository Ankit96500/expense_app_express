import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Expense = sequelize.define('expense',{

    id :{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true,allowNull:false},
    
    expense_amount:{type:DataTypes.INTEGER,allowNull:true},
    
    desc:{type:DataTypes.STRING,allowNull:true},
    
    category:{type:DataTypes.STRING,allowNull:true},

});
export const va = "i amasn";
export default Expense;