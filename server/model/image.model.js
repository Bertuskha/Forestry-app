import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import sequelize from '../db/db.js';

class Image extends Model {}

Image.init({
    leftIMG:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rightIMG:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName: "images",
})

export default Image;