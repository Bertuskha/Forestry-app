import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import sequelize from '../db/db.js';

class Image extends Model {}

Image.init({
    leftimg:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rightimg:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName: "images",
    timestamps: false,
})

export default Image;