import {Sequelize} from 'sequelize';
import Client from 'pg';
import dotenv from 'dotenv';
dotenv.config({path: '../config/.env'});
/**
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
*/
const sequelize = new Sequelize ('d9qfltv726qbf5', 'svptpogaockioz', 'cdc316687e5dde0b63746f5c3a0ea095fe786280dd82c7b225543d251d9b10f1', {
    host: 'ec2-35-153-114-74.compute-1.amazonaws.com:5432',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    },
    define: {
        timestamps: false
    },
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/**const sequelize = new Sequelize ('forestryData', 'root', 'M4tryo.shka', {
    host: 'https://forestry-app.herokuapp.com/',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
});
*/
export default sequelize;