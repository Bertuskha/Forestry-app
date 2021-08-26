import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: './server/config/.env'});
import sequelize from './server/db/db.js';
 
// SERVER CONFIGURATION
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
    sequelize.sync({force: false})
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));
  
});

app.get('*', (req, res) => {
    res.sendFile('./index.html');
});

import {router} from './server/route/routes.js';
app.use(router);