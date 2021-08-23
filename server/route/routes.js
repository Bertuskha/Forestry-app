import express from 'express';
import ShortUniqueID from 'short-unique-id';
import Data from '../model/data.model.js';

const router = express.Router();

router.get('/api/getToken', (req, res) => {
    const getID = new ShortUniqueID();
    const uid = getID();
    //Debugging purposes: console.log('id from backend ' + uid);
    res.send(uid);
})
/**
router.get('/api/sendData', (req, res) => {

})
*/
export {router};

/**
 * const dataEntry = new Data({
        userID: uid,
        value: 7
    });
    dataEntry.save()
        .then((res) => {
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
        });
 */