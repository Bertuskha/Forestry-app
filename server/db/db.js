import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: '../config/.env'});

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

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