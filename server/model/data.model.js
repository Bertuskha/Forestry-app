import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import sequelize from '../db/db.js';

class Data extends Model {}

Data.init({
    userID:{
        type: DataTypes.STRING,
        allowNull: false
    },
    questionID:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    modelName: "Data"
})

export default Data;