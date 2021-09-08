import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import sequelize from '../db/db.js';

class Index extends Model {}

Index.init({
    userid:{
        type: DataTypes.STRING,
        allowNull: false
    },
    questionindex:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    sequelize,
    modelName: "indexes",
    timestamps: false,
})

export default Index;