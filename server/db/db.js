import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: '../config/.env'});

const sequelize = new Sequelize ('forestryData', 'root', 'M4tryo.shka', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
});

export default sequelize;