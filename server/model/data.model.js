import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import sequelize from '../db/db.js';

class Data extends Model {}

Data.init({
    userid:{
        type: DataTypes.STRING,
        allowNull: false
    },
    questionid:{
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
    modelName: "data",
    timestamps: false,
})

export default Data;